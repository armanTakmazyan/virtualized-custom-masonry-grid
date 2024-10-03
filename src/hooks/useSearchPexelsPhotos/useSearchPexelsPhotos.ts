import { useInfiniteScroll } from 'ahooks';
import { searchPexelsPhotos } from '../../api/pexelsPhotoService';
import { DEFAULT_PER_PAGE } from '../../api/pexelsPhotoService/constants';
import { PexelsInfiniteScrollResult, UseSearchPexelsPhotos } from './types';

export const useSearchPexelsPhotos: UseSearchPexelsPhotos = ({
  query = '',
  perPage = DEFAULT_PER_PAGE,
  ...rest
}) => {
  const result = useInfiniteScroll<PexelsInfiniteScrollResult>(
    async (previousData) => {
      const page = previousData?.page ? previousData.page + 1 : 1;
      const result = await searchPexelsPhotos({ query, page, perPage });
      return {
        page,
        total: result.total_results,
        list: result.photos,
      };
    },
    {
      isNoMore: (previousData) =>
        previousData ? previousData.list.length >= previousData.total : false,
      reloadDeps: [query, perPage],
      ...rest,
    },
  );

  return result;
};
