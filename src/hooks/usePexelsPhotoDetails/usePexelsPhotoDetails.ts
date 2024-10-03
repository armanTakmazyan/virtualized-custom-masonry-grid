import { useRequest } from 'ahooks';
import { fetchPexelsPhotoDetailsById } from '../../api/pexelsPhotoService/photoService';
import { UsePexelsPhotoDetails } from './types';

export const usePexelsPhotoDetails: UsePexelsPhotoDetails = ({ id }) => {
  const result = useRequest(() => fetchPexelsPhotoDetailsById({ id }), {
    refreshDeps: [id],
  });

  return result;
};
