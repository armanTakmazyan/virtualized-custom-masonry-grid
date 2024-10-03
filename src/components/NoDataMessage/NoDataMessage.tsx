import { Message, NoDataWrapper } from './styles';

export const NoDataMessage = ({
  message = 'No data available for this resource.',
}) => {
  return (
    <NoDataWrapper>
      <Message>{message}</Message>
    </NoDataWrapper>
  );
};
