import { useInfiniteScroll } from 'ahooks';
import { fetchPexelsCuratedPhotos } from '../../api/pexelsPhotoService';
import { DEFAULT_PER_PAGE } from '../../api/pexelsPhotoService/constants';
import { UsePexelsCuratedPhotos, PexelsInfiniteScrollResult } from './types';

export const useCuratedPexelsPhotos: UsePexelsCuratedPhotos = ({
  perPage = DEFAULT_PER_PAGE,
  ...rest
} = {}) => {
  const result = useInfiniteScroll<PexelsInfiniteScrollResult>(
    async (previousData) => {
      const page = previousData?.page ? previousData.page + 1 : 1;
      const result = await fetchPexelsCuratedPhotos({ page, perPage });
      return {
        page,
        total: result.total_results,
        list: result.photos,
      };
    },
    {
      isNoMore: (previousData) =>
        previousData ? previousData.list.length >= previousData.total : false,
      ...rest,
    },
  );

  return result;
};
