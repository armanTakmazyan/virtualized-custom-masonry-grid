export const DEFAULT_COLUMNS_COUNT = 3;

export const PAGE_VARIANTS = {
  initial: {
    x: 100,
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
  out: {
    x: -100,
    opacity: 0,
  },
} as const;

export const PAGE_TRANSITION = {
  ease: 'easeInOut',
  duration: 0.5,
} as const;
