import { useMemo } from 'react';
import { useWindowWidth } from '../useWindowWidth';
import { UseBreakpointValueArgs } from './types';

export const useBreakpointValue = <T>({
  breakpoints,
  defaultValue,
}: UseBreakpointValueArgs<T>) => {
  const windowWidth = useWindowWidth();

  const sortedBreakpoints = useMemo(
    () =>
      Object.entries(breakpoints).sort(([a], [b]) => parseInt(a) - parseInt(b)),
    [breakpoints],
  );

  const value = useMemo(
    () =>
      sortedBreakpoints.reduce(
        (currentValue, [breakPoint, value]) =>
          windowWidth > parseInt(breakPoint) ? value : currentValue,
        defaultValue,
      ),
    [windowWidth, sortedBreakpoints, defaultValue],
  );

  return value;
};
