import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSearchPexelsPhotos } from '../../hooks/useSearchPexelsPhotos';
import { PexelsPhoto as PexelsPhotoType } from '../../api/pexelsPhotoService/types';
import { useBreakpointValue } from '../../hooks/useBreakpointValue';
import { Masonry } from '../../components/Masonry';
import { PexelsPhoto } from '../../components/PexelsPhoto';
import { ImageDetailsSpinner } from '../../components/ImageDetails/ImageDetailsSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';
import { NoDataMessage } from '../../components/NoDataMessage';

export const SearchedPexelsPhotos: React.FC<{}> = () => {
  const [searchParams] = useSearchParams();

  const masonryContainerRef = useRef<HTMLDivElement>(null);

  const {
    data: { list: photos = [] } = {},
    loading,
    error,
  } = useSearchPexelsPhotos({
    target: masonryContainerRef,
    query: searchParams.get('search') ?? '',
  });

  const value = useBreakpointValue({
    breakpoints: { 320: 1, 640: 2, 1024: 4, 1980: 5 },
    defaultValue: 2,
  });

  return loading ? (
    <ImageDetailsSpinner />
  ) : error ? (
    <ErrorMessage />
  ) : !photos?.length ? (
    <NoDataMessage />
  ) : (
    <Masonry<PexelsPhotoType>
      wrapperRef={masonryContainerRef}
      items={photos}
      columnsCount={value}
      renderItem={(photo) => <PexelsPhoto photo={photo} />}
    />
  );
};
