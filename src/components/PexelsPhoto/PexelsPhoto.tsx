import { Photo, PhotoLink } from './styles';
import { PexelsPhotoProps } from './types';

export const PexelsPhoto: React.FC<PexelsPhotoProps> = ({ photo }) => {
  return (
    <PhotoLink to={`/image/${photo?.id}`}>
      <Photo src={photo.src.large} alt="Random" />
    </PhotoLink>
  );
};
