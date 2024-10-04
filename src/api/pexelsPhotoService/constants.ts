export const DEFAULT_PAGE = 1;

export const DEFAULT_PER_PAGE = 20;

export const PEXELS_API_ROUTES = {
  CURATED: '/curated',
  SEARCH: '/search',
  PHOTO_DETAILS: (id: string | number) => `/photos/${id}`,
} as const;

export const FETCH_CURATED_PHOTOS_DEFAULT_ARGS = {
  page: DEFAULT_PAGE,
  perPage: DEFAULT_PER_PAGE,
} as const;
