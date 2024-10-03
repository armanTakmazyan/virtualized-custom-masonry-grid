import { useInfiniteScroll } from 'ahooks';
import { PexelsPhoto } from '../../api/pexelsPhotoService/types';

export interface PexelsInfiniteScrollResult {
  list: PexelsPhoto[];
  page: number;
  total: number;
}

type UsePexelsInfiniteScrollOptions = Exclude<
  Parameters<typeof useInfiniteScroll<PexelsInfiniteScrollResult>>[1],
  undefined
>;

export interface UseSearchPexelsPhotosArgs
  extends UsePexelsInfiniteScrollOptions {
  query: string;
  perPage?: number;
}

export type UseSearchPexelsPhotosResult = ReturnType<
  typeof useInfiniteScroll<PexelsInfiniteScrollResult>
>;

export type UseSearchPexelsPhotos = (
  args: UseSearchPexelsPhotosArgs,
) => UseSearchPexelsPhotosResult;
