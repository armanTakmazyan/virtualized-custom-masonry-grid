import { useSearchParams } from 'react-router-dom';
import { SearchedPexelsPhotos } from '../../containers/SearchedPexelsPhotos';
import { CuratedPexelsPhotos } from '../../containers/CuratedPexelsPhotos';

function Root() {
  const [searchParams] = useSearchParams();

  return searchParams.get('search') ? (
    <SearchedPexelsPhotos />
  ) : (
    <CuratedPexelsPhotos />
  );
}

export default Root;
