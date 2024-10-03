import { MasonryItem } from '../types';

export interface CalculateColumnHeightArgs {
  item: MasonryItem;
  columnWidth: number;
}

export type CalculateColumnHeight = (args: CalculateColumnHeightArgs) => number;

export interface CreateColumnsStructureArgs<T extends MasonryItem> {
  columnsCount: number;
  columnWidth: number;
  items: T[];
}

export interface ColumnItem<T extends MasonryItem> {
  item: T;
  top: number;
  height: number;
}

export interface ColumnStructure<T extends MasonryItem> {
  items: ColumnItem<T>[];
  height: number;
}

export type CreateColumnsStructureResult<T extends MasonryItem> =
  ColumnStructure<T>[];

export interface IsItemVisibleArgs {
  itemTop: number;
  itemHeight: number;
  containerHeight: number;
  containerScrollTop: number;
}

export type IsItemVisible = (args: IsItemVisibleArgs) => boolean;
