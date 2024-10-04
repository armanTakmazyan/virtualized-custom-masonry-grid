import { vi } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useBreakpointValue } from '../../../hooks/useBreakpointValue';

const mocks = vi.hoisted(() => {
  return {
    useWindowWidth: vi.fn(),
  };
});

vi.mock('../../../hooks/useWindowWidth', () => ({
  useWindowWidth: mocks.useWindowWidth,
}));

describe('useBreakpointValue', () => {
  it('should return default value when no breakpoints match', () => {
    const breakpoints = {
      '600': 'mobile',
      '900': 'tablet',
      '1200': 'desktop',
    };
    const defaultValue = 'default';

    mocks.useWindowWidth.mockReturnValue(500);

    const { result } = renderHook(() =>
      useBreakpointValue({ breakpoints, defaultValue }),
    );

    expect(result.current).toBe(defaultValue);
  });

  it('should return the correct value for window width within breakpoints', () => {
    const breakpoints = {
      '600': 'mobile',
      '900': 'tablet',
      '1200': 'desktop',
    };
    const defaultValue = 'default';

    mocks.useWindowWidth.mockReturnValue(700);

    const { result } = renderHook(() =>
      useBreakpointValue({ breakpoints, defaultValue }),
    );

    expect(result.current).toBe('mobile');
  });

  it('should return the value for the largest breakpoint if window width exceeds all breakpoints', () => {
    const breakpoints = {
      '600': 'mobile',
      '900': 'tablet',
      '1200': 'desktop',
    };
    const defaultValue = 'default';

    mocks.useWindowWidth.mockReturnValue(1300);

    const { result } = renderHook(() =>
      useBreakpointValue({ breakpoints, defaultValue }),
    );

    expect(result.current).toBe('desktop');
  });
});
