import { AssignRefArgs, MergeRefsArgs } from './types';

export const assignRef = <T>({ ref, value }: AssignRefArgs<T>) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (typeof ref === 'object' && ref !== null && 'current' in ref) {
    (ref as React.MutableRefObject<T>).current = value;
  }
};

export const mergeRefs = <T>(...refs: MergeRefsArgs<T>) => {
  return (node: T | null) => {
    refs.forEach((ref) => assignRef({ ref, value: node }));
  };
};
