import { Container, HomeLink, Message, Title } from './styles';

export const NotFoundPage = () => {
  return (
    <Container>
      <Title>Oops! 404 - Page Not Found</Title>
      <Message>
        It seems like you've wandered off the beaten path. Don't worry, it
        happens to the best of us!
      </Message>
      <HomeLink to="/">Let's get you back home!</HomeLink>
    </Container>
  );
};
