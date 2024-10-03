import { RefObject } from 'react';

export interface UseMasonryGridUpdateArgs {
  containerRef: RefObject<HTMLDivElement>;
  updateLayout: () => void;
}

export type UseMasonryGridUpdate = (args: UseMasonryGridUpdateArgs) => void;
