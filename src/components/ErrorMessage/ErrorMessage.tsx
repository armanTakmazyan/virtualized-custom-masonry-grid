import { ErrorWrapper, Message } from './styles';
import { ErrorMessageProps } from './types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message = 'Something went wrong. Please try again later.',
}) => {
  return (
    <ErrorWrapper>
      <Message>{message}</Message>
    </ErrorWrapper>
  );
};
