import { useRef } from 'react';
import { useCuratedPexelsPhotos } from '../../hooks/useCuratedPexelsPhotos';
import { PexelsPhoto as PexelsPhotoType } from '../../api/pexelsPhotoService/types';
import { useBreakpointValue } from '../../hooks/useBreakpointValue';
import { Masonry } from '../../components/Masonry';
import { PexelsPhoto } from '../../components/PexelsPhoto';
import { ImageDetailsSpinner } from '../../components/ImageDetails/ImageDetailsSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';
import { NoDataMessage } from '../../components/NoDataMessage';

export const CuratedPexelsPhotos: React.FC<{}> = () => {
  const masonryContainerRef = useRef<HTMLDivElement>(null);

  const {
    data: { list: photos = [] } = {},
    loading: areCuratedPhotosLoading,
    error: curatedPhotosError,
  } = useCuratedPexelsPhotos({
    target: masonryContainerRef,
  });

  const value = useBreakpointValue({
    breakpoints: { 320: 1, 640: 2, 1024: 4, 1980: 5 },
    defaultValue: 2,
  });

  return areCuratedPhotosLoading ? (
    <ImageDetailsSpinner />
  ) : curatedPhotosError ? (
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
