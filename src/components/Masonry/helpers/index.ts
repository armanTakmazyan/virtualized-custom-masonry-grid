import { MasonryItem } from '../types';
import {
  CalculateColumnHeight,
  ColumnStructure,
  CreateColumnsStructureArgs,
  CreateColumnsStructureResult,
  IsItemVisible,
} from './types';

export const calculateColumnHeight: CalculateColumnHeight = ({
  item,
  columnWidth,
}) => {
  return (item.height / item.width) * columnWidth;
};

export const createColumnsStructure = <T extends MasonryItem>({
  columnsCount,
  columnWidth,
  items,
}: CreateColumnsStructureArgs<T>): CreateColumnsStructureResult<T> => {
  const columns: ColumnStructure<T>[] = Array.from(
    { length: columnsCount },
    () => ({
      items: [],
      height: 0,
    }),
  );

  const columnsHeights = Array(columnsCount).fill(0);

  items.forEach((item) => {
    const minHeightIndex = columnsHeights.indexOf(Math.min(...columnsHeights));
    const itemHeight = calculateColumnHeight({ item, columnWidth });
    const itemTop = columnsHeights[minHeightIndex];
    columns[minHeightIndex].items.push({
      item,
      top: itemTop,
      height: itemHeight,
    });
    columnsHeights[minHeightIndex] += itemHeight;
    columns[minHeightIndex].height = columnsHeights[minHeightIndex];
  });

  return columns;
};

export const isItemVisible: IsItemVisible = ({
  itemTop,
  itemHeight,
  containerHeight,
  containerScrollTop,
}) => {
  const itemBottom = itemTop + itemHeight;
  const viewportTop = containerScrollTop;
  const viewportBottom = containerScrollTop + containerHeight;

  return itemBottom > viewportTop && itemTop < viewportBottom;
};
