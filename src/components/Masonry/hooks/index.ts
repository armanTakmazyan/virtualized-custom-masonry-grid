import { useEffect } from 'react';
import { UseMasonryGridUpdate } from './types';

export const useMasonryGridUpdate: UseMasonryGridUpdate = ({
  containerRef,
  updateLayout,
}) => {
  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    updateLayout(); // Initialize on mount

    const handleResizeOrScroll = () => requestAnimationFrame(updateLayout);

    container.addEventListener('scroll', handleResizeOrScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleResizeOrScroll);

    return () => {
      container.removeEventListener('scroll', handleResizeOrScroll);
      window.removeEventListener('resize', handleResizeOrScroll);
    };
  }, [updateLayout]);
};
