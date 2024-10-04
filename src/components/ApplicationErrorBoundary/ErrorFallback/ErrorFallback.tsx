import { ErrorContainer, ErrorMessage, ReloadButton } from './styles';

export const ErrorFallback: React.FC = () => (
  <ErrorContainer role="alert">
    <ErrorMessage>Oops! Something didn't go as expected.</ErrorMessage>
    <ReloadButton onClick={() => window.location.reload()}>
      Reload Page
    </ReloadButton>
  </ErrorContainer>
);
