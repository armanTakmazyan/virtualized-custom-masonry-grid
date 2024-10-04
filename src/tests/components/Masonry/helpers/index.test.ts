import { describe, it, expect } from 'vitest';
import { createColumnsStructure } from '../../../../components/Masonry/helpers';
import { MasonryItem } from '../../../../components/Masonry/types';

const mockItems: MasonryItem[] = [
  { id: 1, width: 100, height: 200 },
  { id: 2, width: 100, height: 100 },
  { id: 3, width: 100, height: 300 },
  { id: 4, width: 100, height: 400 },
];

describe('createColumnsStructure', () => {
  it('should handle zero items correctly', () => {
    const result = createColumnsStructure<MasonryItem>({
      columnsCount: 3,
      columnWidth: 100,
      items: [],
    });

    expect(result.length).toBe(3);
    result.forEach((column) => {
      expect(column.items.length).toBe(0);
      expect(column.height).toBe(0);
    });
  });

  it('should create the correct number of columns', () => {
    const result = createColumnsStructure<MasonryItem>({
      columnsCount: 2,
      columnWidth: 100,
      items: mockItems,
    });

    expect(result.length).toBe(2);
    expect(result[0].items.length + result[1].items.length).toBe(
      mockItems.length,
    );
  });

  it('should correctly calculate the column height and assign items to the shortest column', () => {
    const result = createColumnsStructure<MasonryItem>({
      columnsCount: 2,
      columnWidth: 100,
      items: mockItems,
    });

    const firstColumnTotalHeight = result[0].items.reduce(
      (totalHeight, currentItem) => totalHeight + currentItem.height,
      0,
    );
    const secondColumnTotalHeight = result[1].items.reduce(
      (totalHeight, currentItem) => totalHeight + currentItem.height,
      0,
    );

    // Verify that the first item is placed in the first column
    expect(result[0].items[0].item).toEqual(mockItems[0]);

    expect(result[0].height).toBe(firstColumnTotalHeight);
    expect(result[1].height).toBe(secondColumnTotalHeight);
  });

  it('should handle varying column counts', () => {
    const result = createColumnsStructure<MasonryItem>({
      columnsCount: 4,
      columnWidth: 100,
      items: mockItems,
    });

    expect(result.length).toBe(4);
    expect(
      result[0].items.length +
        result[1].items.length +
        result[2].items.length +
        result[3].items.length,
    ).toBe(mockItems.length);
  });
});
