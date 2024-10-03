import { HeaderContainer } from './styles';
import { HeaderFactory } from './HeaderFactory';

export const Header: React.FC<{}> = () => {
  return (
    <HeaderContainer>
      <HeaderFactory />
    </HeaderContainer>
  );
};
