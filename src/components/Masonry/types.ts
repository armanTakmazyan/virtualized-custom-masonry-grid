import { ForwardedRef } from 'react';

export interface MasonryItem {
  id: number;
  width: number;
  height: number;
}

export interface MasonryProps<T extends MasonryItem> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  gutter?: string;
  columnsCount?: number;
  wrapperRef: ForwardedRef<HTMLDivElement>;
}
