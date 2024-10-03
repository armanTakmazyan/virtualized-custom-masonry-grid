import {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMergedRef } from '../../hooks/useMergedRef';
import { Column, Container } from './styles';
import {
  DEFAULT_COLUMNS_COUNT,
  pageTransition,
  pageVariants,
} from './constants';
import { MasonryItem, MasonryProps } from './types';

const getItemHeight = (item: any, columnWidth: number): number => {
  return (item.height / item.width) * columnWidth;
};

export const Masonry = <T extends MasonryItem>({
  items,
  renderItem,
  columnsCount = DEFAULT_COLUMNS_COUNT,
  wrapperRef,
}: MasonryProps<T>) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [columnWidth, setColumnWidth] = useState(300);
  const [containerHeight, setContaineHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(wrapperRef, containerRef);

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const newColumnWidth = Math.floor(containerWidth / columnsCount);

    setColumnWidth(newColumnWidth);
    setScrollTop(containerRef.current.scrollTop);
    setContaineHeight(containerRef.current.offsetHeight);
  }, [columnsCount]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResizeOrScroll = () => {
      requestAnimationFrame(updateLayout);
    };

    container.addEventListener('scroll', handleResizeOrScroll, {
      passive: true,
    });
    window.addEventListener('resize', handleResizeOrScroll);

    updateLayout(); // Initialize on mount

    return () => {
      container.removeEventListener('scroll', handleResizeOrScroll);
      window.removeEventListener('resize', handleResizeOrScroll);
    };
  }, [updateLayout]);

  const columns = useMemo(() => {
    const cols: Array<{
      items: { item: T; top: number; height: number }[];
      height: number;
    }> = Array.from({ length: columnsCount }, () => ({
      items: [],
      height: 0,
    }));
    const columnsHeights = Array(columnsCount).fill(0);

    items.forEach((item) => {
      const minHeightIndex = columnsHeights.indexOf(
        Math.min(...columnsHeights),
      );
      const itemHeight = getItemHeight(item, columnWidth);
      const itemTop = columnsHeights[minHeightIndex];
      cols[minHeightIndex].items.push({
        item,
        top: itemTop,
        height: itemHeight,
      });
      columnsHeights[minHeightIndex] += itemHeight;
      cols[minHeightIndex].height = columnsHeights[minHeightIndex];
    });

    return cols;
  }, [items, columnsCount, columnWidth]);

  return (
    <Container
      ref={mergedRef}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {columns.map((column, columnIndex) => (
        <Column
          key={columnIndex}
          style={{ height: column.height, position: 'relative' }}
        >
          {column.items.map(({ item, top, height }, index) => {
            const itemBottom = top + height;
            const viewportTop = scrollTop;
            const viewportBottom = scrollTop + containerHeight;

            const isVisible = itemBottom > viewportTop && top < viewportBottom;

            const itemStyle = {
              position: 'absolute' as const,
              top,
              width: '100%',
              height,
            };

            return (
              <Fragment key={`${item.id}_${index + 1}`}>
                {isVisible && <div style={itemStyle}>{renderItem(item)}</div>}
              </Fragment>
            );
          })}
        </Column>
      ))}
    </Container>
  );
};
