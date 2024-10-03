import {
  Container,
  ImageContainer,
  DetailsContainer,
  Id,
  Photographer,
  PhotographerUrl,
} from './styles';
import { ImageDetailsProps } from './types';

export const ImageDetails: React.FC<ImageDetailsProps> = ({
  image: { id, photographer, photographer_url, src: { large2x } = {} } = {},
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
        <img src={large2x} alt={'image'} />
      </ImageContainer>
    </Container>
  );
};
