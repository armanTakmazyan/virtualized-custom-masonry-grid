import { useCallback } from 'react';
import { mergeRefs } from './helpers';
import { MergeRefsArgs } from './types';

export const useMergedRef = <T>(...refs: MergeRefsArgs<T>) => {
  return useCallback(mergeRefs(...refs), refs);
};
