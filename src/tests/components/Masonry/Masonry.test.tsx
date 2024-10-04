import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Masonry } from '../../../components/Masonry';
import { MasonryItem } from '../../../components/Masonry/types';

const mocks = vi.hoisted(() => {
  return {
    useRef: vi.fn(),
    useMergedRef: vi.fn(),
  };
});

vi.mock('react', async () => {
  const originalModule = await vi.importActual('react');
  return {
    ...originalModule,
    useRef: mocks.useRef,
  };
});

vi.mock('../../../hooks/useMergedRef', () => {
  return {
    useMergedRef: mocks.useMergedRef,
  };
});

const containerRefMockedValue = {
  current: {
    offsetWidth: 300,
    scrollTop: 0,
    offsetHeight: 1000,
    addEventListener: () => {},
    removeEventListener: () => {},
  },
};

const mockItems: MasonryItem[] = [
  { id: 1, width: 400, height: 400 },
  { id: 2, width: 600, height: 600 },
] as const;

const renderItem = (item: MasonryItem): JSX.Element => (
  <div data-testid={`item-${item.id}`}>{item.id}</div>
);

describe('Masonry Component', () => {
  beforeAll(() => {
    mocks.useMergedRef.mockReturnValue({});
    mocks.useRef.mockReturnValue(containerRefMockedValue);
  });

  it('renders without crashing with default props', () => {
    render(<Masonry items={mockItems} renderItem={renderItem} />);

    mockItems.forEach((item) => {
      expect(screen.getByTestId(`item-${item.id}`)).toBeInTheDocument();
    });
  });

  it('renders the correct number of columns', () => {
    const { container } = render(
      <Masonry items={mockItems} renderItem={renderItem} columnsCount={2} />,
    );

    const columns = container.querySelectorAll(
      'div[data-testid="masonry-column"]',
    );

    expect(columns.length).toBe(2);
  });

  it('renders items within the columns', () => {
    const { container } = render(
      <Masonry items={mockItems} renderItem={renderItem} columnsCount={2} />,
    );

    const columns = container.querySelectorAll(
      'div[data-testid="masonry-column"]',
    );
    expect(columns.length).toBe(2);

    const itemsInFirstColumn = columns[0].querySelectorAll(
      '[data-testid^="masonry-column-item-"]',
    );
    const itemsInSecondColumn = columns[1].querySelectorAll(
      '[data-testid^="masonry-column-item-"]',
    );

    expect(itemsInFirstColumn.length + itemsInSecondColumn.length).toBe(
      mockItems.length,
    );
  });
});
