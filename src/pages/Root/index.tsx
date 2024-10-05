import { lazy, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchedPexelsPhotos = lazy(() =>
  import('../../containers/SearchedPexelsPhotos').then((module) => ({
    default: module.SearchedPexelsPhotos,
  })),
);

const CuratedPexelsPhotos = lazy(() =>
  import('../../containers/CuratedPexelsPhotos').then((module) => ({
    default: module.CuratedPexelsPhotos,
  })),
);

export const RootPage: React.FC<{}> = () => {
  const [searchParams] = useSearchParams();

  return (
    <Suspense>
      {searchParams.get('search') ? (
        <SearchedPexelsPhotos />
      ) : (
        <CuratedPexelsPhotos />
      )}
    </Suspense>
  );
};
