export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

export interface PexelsResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
  next_page?: string;
}

export interface FetchPexelsCuratedPhotosArgs {
  page: number;
  perPage: number;
}

export type FetchPexelsCuratedPhotos = (
  args: FetchPexelsCuratedPhotosArgs,
) => Promise<PexelsResponse>;

export interface SearchPexelsPhotosArgs {
  query: string;
  page: number;
  perPage: number;
}

export type SearchPexelsPhotos = (
  args: SearchPexelsPhotosArgs,
) => Promise<PexelsResponse>;

export interface FetchPexelsPhotoDetailsByIdArgs {
  id: number | string;
}

export type FetchPexelsPhotoDetailsById = (
  args: FetchPexelsPhotoDetailsByIdArgs,
) => Promise<PexelsPhoto>;
