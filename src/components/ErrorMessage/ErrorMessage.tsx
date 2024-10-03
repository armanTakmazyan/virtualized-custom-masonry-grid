import { ErrorWrapper, Message } from './styles';

export const ErrorMessage = ({
  message = 'Something went wrong. Please try again later.',
}) => {
  return (
    <ErrorWrapper>
      <Message>{message}</Message>
    </ErrorWrapper>
  );
};
