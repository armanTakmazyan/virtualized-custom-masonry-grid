import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #181818;
  color: #ffffff;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Message = styled.p`
  font-size: 1.5rem;
  margin-top: 16px;
`;

export const HomeLink = styled(Link)`
  margin-top: 24px;
  font-size: 1.2rem;
  color: #1e90ff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
