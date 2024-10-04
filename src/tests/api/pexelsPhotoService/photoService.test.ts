import { vi, describe, it, expect } from 'vitest';
import { pexelsClient } from '../../../api/pexelsClient';
import {
  FETCH_CURATED_PHOTOS_DEFAULT_ARGS,
  PEXELS_API_ROUTES,
} from '../../../api/pexelsPhotoService/constants';
import {
  fetchPexelsCuratedPhotos,
  searchPexelsPhotos,
  fetchPexelsPhotoDetailsById,
} from '../../../api/pexelsPhotoService/photoService';
import { PexelsResponse } from '../../../api/pexelsPhotoService/types';

const mocks = vi.hoisted(() => {
  return {
    pexelsClient: {
      get: vi.fn(),
    },
  };
});

vi.mock('../../../api/pexelsClient', () => {
  return {
    pexelsClient: mocks.pexelsClient,
  };
});

const mockData: PexelsResponse = {
  photos: [],
  total_results: 0,
  page: FETCH_CURATED_PHOTOS_DEFAULT_ARGS.page,
  per_page: FETCH_CURATED_PHOTOS_DEFAULT_ARGS.perPage,
} as const;

describe('Pexels API functions', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });

  describe('fetchPexelsCuratedPhotos', () => {
    it('should fetch curated photos with default params', async () => {
      mocks.pexelsClient.get.mockReturnValueOnce({ data: mockData });

      const result = await fetchPexelsCuratedPhotos();

      expect(pexelsClient.get).toHaveBeenCalledWith(PEXELS_API_ROUTES.CURATED, {
        params: {
          page: FETCH_CURATED_PHOTOS_DEFAULT_ARGS.page,
          per_page: FETCH_CURATED_PHOTOS_DEFAULT_ARGS.perPage,
        },
      });

      expect(result).toEqual(mockData);
    });
  });

  describe('searchPexelsPhotos', () => {
    it('should fetch photos based on a search query', async () => {
      const query = 'nature';

      mocks.pexelsClient.get.mockReturnValueOnce({ data: mockData });

      const result = await searchPexelsPhotos({ query });

      expect(pexelsClient.get).toHaveBeenCalledWith(PEXELS_API_ROUTES.SEARCH, {
        params: {
          query,
          page: FETCH_CURATED_PHOTOS_DEFAULT_ARGS.page,
          per_page: FETCH_CURATED_PHOTOS_DEFAULT_ARGS.perPage,
        },
      });

      expect(result).toEqual(mockData);
    });
  });

  describe('fetchPexelsPhotoDetailsById', () => {
    it('should fetch photo details by id', async () => {
      const id = 123;

      mocks.pexelsClient.get.mockReturnValueOnce({
        data: { id, photographer: 'John Doe' },
      });

      const result = await fetchPexelsPhotoDetailsById({ id });

      expect(pexelsClient.get).toHaveBeenCalledWith(
        PEXELS_API_ROUTES.PHOTO_DETAILS(id),
      );

      expect(result).toEqual(mockData);
    });
  });
});
