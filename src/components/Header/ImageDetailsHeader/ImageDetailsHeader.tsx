import { useNavigate, useLocation } from 'react-router-dom';
import { Container, BackButton, Title } from './styles';

export const ImageDetailsHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    if (location.key === 'default') {
      return navigate('/');
    }
    navigate(-1);
  };

  return (
    <Container>
      <Title>
        <BackButton onClick={goBack}>⬅</BackButton>
        Image Details
      </Title>
    </Container>
  );
};
