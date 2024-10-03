import { useCallback, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect';

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return windowWidth;
};
