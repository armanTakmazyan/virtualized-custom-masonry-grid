import { pexelsClient } from '../pexelsClient';
import { DEFAULT_PAGE, DEFAULT_PER_PAGE } from './constants';
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
}) => {
  const response = await pexelsClient.get<PexelsResponse>('/curated', {
    params: { page, per_page: perPage },
  });
  return response.data;
};

export const searchPexelsPhotos: SearchPexelsPhotos = async ({
  query,
  page = DEFAULT_PAGE,
  perPage = DEFAULT_PER_PAGE,
}) => {
  const response = await pexelsClient.get<PexelsResponse>('/search', {
    params: { query, page, per_page: perPage },
  });
  return response.data;
};

export const fetchPexelsPhotoDetailsById: FetchPexelsPhotoDetailsById = async ({
  id,
}) => {
  const response = await pexelsClient.get<PexelsPhoto>(`/photos/${id}`);
  return response.data;
};
