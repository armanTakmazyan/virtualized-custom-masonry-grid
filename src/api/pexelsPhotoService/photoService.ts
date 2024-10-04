import { pexelsClient } from '../pexelsClient';
import {
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  PEXELS_API_ROUTES,
  FETCH_CURATED_PHOTOS_DEFAULT_ARGS,
} from './constants';
import {
  PexelsPhoto,
  PexelsResponse,
  FetchPexelsCuratedPhotos,
  SearchPexelsPhotos,
  FetchPexelsPhotoDetailsById,
} from './types';

export const fetchPexelsCuratedPhotos: FetchPexelsCuratedPhotos = async ({
  page = DEFAULT_PAGE,
  perPage = DEFAULT_PER_PAGE,
} = FETCH_CURATED_PHOTOS_DEFAULT_ARGS) => {
  const response = await pexelsClient.get<PexelsResponse>(
    PEXELS_API_ROUTES.CURATED,
    {
      params: { page, per_page: perPage },
    },
  );
  return response.data;
};

export const searchPexelsPhotos: SearchPexelsPhotos = async ({
  query,
  page = DEFAULT_PAGE,
  perPage = DEFAULT_PER_PAGE,
}) => {
  const response = await pexelsClient.get<PexelsResponse>(
    PEXELS_API_ROUTES.SEARCH,
    {
      params: { query, page, per_page: perPage },
    },
  );
  return response.data;
};

export const fetchPexelsPhotoDetailsById: FetchPexelsPhotoDetailsById = async ({
  id,
}) => {
  const response = await pexelsClient.get<PexelsPhoto>(
    PEXELS_API_ROUTES.PHOTO_DETAILS(id),
  );
  return response.data;
};
