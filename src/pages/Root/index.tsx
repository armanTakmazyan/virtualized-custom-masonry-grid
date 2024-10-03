import { useSearchParams } from 'react-router-dom';
import { SearchedPexelsPhotos } from '../../containers/SearchedPexelsPhotos';
import { CuratedPexelsPhotos } from '../../containers/CuratedPexelsPhotos';

export const RootPage: React.FC<{}> = () => {
  const [searchParams] = useSearchParams();

  return searchParams.get('search') ? (
    <SearchedPexelsPhotos />
  ) : (
    <CuratedPexelsPhotos />
  );
};
