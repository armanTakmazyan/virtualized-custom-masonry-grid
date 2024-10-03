import { Spinner } from '../Spinner';
import { ImageDetailsSpinnerContainer } from './styles';

export const ImageDetailsSpinner: React.FC<{}> = () => {
  return (
    <ImageDetailsSpinnerContainer>
      <Spinner />
    </ImageDetailsSpinnerContainer>
  );
};
