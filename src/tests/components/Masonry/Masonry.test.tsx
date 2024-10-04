import { render, screen } from '@testing-library/react';
// import { vi } from 'vitest';
import { Masonry } from '../../../components/Masonry';
import { MasonryItem } from '../../../components/Masonry/types';

vi.mock('../../../components/Masonry/helpers', async () => {
  const originalModule = await vi.importActual<typeof import('../../../components/Masonry/helpers')>('../../../components/Masonry/helpers');
  return {
    ...originalModule,
    isItemVisible: vi.fn((args) => {
      // console.log('args',args)
      // console.log('mtav',originalModule.isItemVisible({...args,containerHeight: 1000}))
      return originalModule.isItemVisible({...args,containerHeight: 1000}); // Call the original function for other cases
    }),
  };
});

// vi.spyOn(hooks, 'useMasonryGridUpdate');

const mockItems: MasonryItem[] = [
  { id: 1, width: 400, height: 400 },
  { id: 2, width: 600, height: 600 },
];

const renderItem = (item: MasonryItem) => <div data-testid={`item-${item.id}`}>{item.id}</div>;

describe('Masonry Component', () => {
  it('renders without crashing with default props', () => {
    render(<Masonry items={mockItems} renderItem={renderItem} />);

    mockItems.forEach((item) => {
      expect(screen.getByTestId(`item-${item.id}`)).toBeInTheDocument();
    });
  });

  // it('renders the correct number of columns', () => {
  //   const { container } = render(
  //     <Masonry items={mockItems} renderItem={renderItem} columnsCount={2} />,
  //   );

  //   const columns = container.querySelectorAll('div[data-testid="masonry-column"]');
  //   expect(columns.length).toBe(2);
  // });

  // it('renders items within the columns', () => {
  //   const { container } = render(
  //     <Masonry items={mockItems} renderItem={renderItem} columnsCount={2} />,
  //   );

  //   const columns = container.querySelectorAll('div[data-testid="masonry-column"]');
  //   expect(columns.length).toBe(2);

  //   const itemsInFirstColumn = columns[0].querySelectorAll('[data-testid^="item-"]');
  //   const itemsInSecondColumn = columns[1].querySelectorAll('[data-testid^="item-"]');

  //   expect(itemsInFirstColumn.length + itemsInSecondColumn.length).toBe(mockItems.length);
  // });

  // it('calls useMasonryGridUpdate with correct arguments', () => {
  //   render(<Masonry items={mockItems} renderItem={renderItem} />);

  //   expect(hooks.useMasonryGridUpdate).toHaveBeenCalled();
  // });
});
