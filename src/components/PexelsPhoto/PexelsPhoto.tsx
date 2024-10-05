import { Image } from '../Image';
import { PhotoLink, photoStyles } from './styles';
import { PexelsPhotoProps } from './types';

export const PexelsPhoto: React.FC<PexelsPhotoProps> = ({ photo }) => {
  return (
    <PhotoLink to={`/image/${photo?.id}`}>
      <Image
        src={photo.src.large}
        alt={photo.photographer}
        $styles={photoStyles}
      />
    </PhotoLink>
  );
};
