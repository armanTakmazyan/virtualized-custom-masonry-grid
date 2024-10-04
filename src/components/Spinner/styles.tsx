import styled from 'styled-components';
import { rotate } from '../../constants/animations';

export const SpinnerWrapper = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &:after {
    content: ' ';
    display: block;
    width: 48px;
    height: 48px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3498db; /* Spinner color */
    border-color: #3498db transparent #3498db transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;
