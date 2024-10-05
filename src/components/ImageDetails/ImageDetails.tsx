import { Image } from '../Image';
import {
  Container,
  DetailsContainer,
  Id,
  Photographer,
  PhotographerUrl,
  ImageContainer,
  imageStyles,
} from './styles';
import { ImageDetailsProps } from './types';

export const ImageDetails: React.FC<ImageDetailsProps> = ({
  image: {
    id,
    width,
    height,
    photographer,
    photographer_url,
    src: { large2x },
  },
}) => {
  return (
    <Container>
      <DetailsContainer>
        <Id>ID: {id}</Id>
        <Photographer>By: {photographer}</Photographer>
        <PhotographerUrl href={photographer_url} target="_blank">
          {photographer_url}
        </PhotographerUrl>
      </DetailsContainer>
      <ImageContainer>
        <Image
          src={large2x}
          alt={photographer}
          $styles={imageStyles}
          width={width}
          height={height}
        />
      </ImageContainer>
    </Container>
  );
};
