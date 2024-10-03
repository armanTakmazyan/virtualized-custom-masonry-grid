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

export interface UsePexelsCuratedPhotosArgs
  extends UsePexelsInfiniteScrollOptions {
  perPage?: number;
}

export type UsePexelsCuratedPhotosResult = ReturnType<
  typeof useInfiniteScroll<PexelsInfiniteScrollResult>
>;

export type UsePexelsCuratedPhotos = (
  args?: UsePexelsCuratedPhotosArgs,
) => UsePexelsCuratedPhotosResult;
