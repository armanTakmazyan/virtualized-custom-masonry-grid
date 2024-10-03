import { Ref } from 'react';

export type PossibleRef<T> = Ref<T> | undefined;

export interface AssignRefArgs<T> {
  ref: PossibleRef<T>;
  value: T;
}

export type MergeRefsArgs<T> = PossibleRef<T>[];
