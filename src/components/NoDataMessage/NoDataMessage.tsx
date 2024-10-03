import { Message, NoDataWrapper } from './styles';
import { NoDataMessageProps } from './types';

export const NoDataMessage: React.FC<NoDataMessageProps> = ({
  message = 'No data available for this resource.',
}) => {
  return (
    <NoDataWrapper>
      <Message>{message}</Message>
    </NoDataWrapper>
  );
};
