import { useLocation } from 'react-router-dom';
import { ImageDetailsHeader } from './ImageDetailsHeader';
import { SearchHeader } from './SearchHeader';

export const HeaderFactory: React.FC<{}> = () => {
  const location = useLocation();

  if (location.pathname.includes('/image')) {
    return <ImageDetailsHeader />;
  }

  return <SearchHeader />;
};
