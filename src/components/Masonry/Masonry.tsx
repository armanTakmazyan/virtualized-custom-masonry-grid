import {
  Fragment,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMergedRef } from '../../hooks/useMergedRef';
import { useMasonryGridUpdate } from './hooks';
import { createColumnsStructure } from './helpers';
import { Column, Container, MasonryItemWrapper } from './styles';
import {
  PAGE_VARIANTS,
  PAGE_TRANSITION,
  DEFAULT_COLUMNS_COUNT,
} from './constants';
import { MasonryItem, MasonryProps } from './types';

export const Masonry = <T extends MasonryItem>({
  items,
  renderItem,
  columnsCount = DEFAULT_COLUMNS_COUNT,
  wrapperRef,
}: MasonryProps<T>): ReactNode => {
  const [scrollTop, setScrollTop] = useState(0);
  const [columnWidth, setColumnWidth] = useState(300);
  const [containerHeight, setContainerHeight] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergedRef(wrapperRef, containerRef);

  const updateLayout = useCallback(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const newColumnWidth = Math.floor(containerWidth / columnsCount);

    setColumnWidth(newColumnWidth);
    setScrollTop(containerRef.current.scrollTop);
    setContainerHeight(containerRef.current.offsetHeight);
  }, [columnsCount]);

  const columns = useMemo(
    () =>
      createColumnsStructure({
        columnsCount,
        columnWidth,
        items,
      }),
    [items, columnsCount, columnWidth],
  );

  useMasonryGridUpdate({
    containerRef,
    updateLayout,
  });

  return (
    <Container
      ref={mergedRef}
      initial="initial"
      animate="in"
      exit="out"
      variants={PAGE_VARIANTS}
      transition={PAGE_TRANSITION}
    >
      {columns.map((column, columnIndex) => (
        <Column key={columnIndex} style={{ height: column.height }}>
          {column.items.map(({ item, top, height }, index) => {
            const itemBottom = top + height;
            const viewportTop = scrollTop;
            const viewportBottom = scrollTop + containerHeight;

            const isVisible = itemBottom > viewportTop && top < viewportBottom;

            return (
              <Fragment key={`${item.id}_${index + 1}`}>
                {isVisible && (
                  <MasonryItemWrapper
                    style={{
                      top,
                      height,
                    }}
                  >
                    {renderItem(item)}
                  </MasonryItemWrapper>
                )}
              </Fragment>
            );
          })}
        </Column>
      ))}
    </Container>
  );
};
