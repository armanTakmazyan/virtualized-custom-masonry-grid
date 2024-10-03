import { PexelsPhoto } from '../../api/pexelsPhotoService/types';
import { Result } from 'ahooks/lib/useRequest/src/types';

export interface UsePexelsPhotoDetailsArgs {
  id: number | string;
}

export type UsePexelsPhotoDetails = (
  args: UsePexelsPhotoDetailsArgs,
) => Result<PexelsPhoto, []>;
