import { useLocation } from 'react-router-dom';
import { ImageDetailsHeader } from './ImageDetailsHeader';
import { SearchHeader } from './SearchHeader';

export const HeaderFactory = () => {
  const location = useLocation();

  if (location.pathname.includes('/image')) {
    return <ImageDetailsHeader />;
  }

  return <SearchHeader />;
};
