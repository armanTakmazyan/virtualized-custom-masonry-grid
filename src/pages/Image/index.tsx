import { useParams } from 'react-router-dom';
import { ImageDetails } from '../../components/ImageDetails';
import { usePexelsPhotoDetails } from '../../hooks/usePexelsPhotoDetails';
import { ImageDetailsSpinner } from '../../components/ImageDetails/ImageDetailsSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';
import { NoDataMessage } from '../../components/NoDataMessage';

function Image() {
  const { id } = useParams();
  const { loading, error, data } = usePexelsPhotoDetails({ id: id ?? '' });

  return loading ? (
    <ImageDetailsSpinner />
  ) : error ? (
    <ErrorMessage />
  ) : data ? (
    <ImageDetails image={data} />
  ) : (
    <NoDataMessage />
  );
}

export default Image;
