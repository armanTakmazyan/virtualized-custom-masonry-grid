import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { pulse } from '../../constants/animations';

export const PhotoLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  border: none;
  &:hover img {
    z-index: 10;
    transform: scale(1.05);
    filter: brightness(1.2);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  /* The pseudo-element loader */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #662b93;
    animation: ${pulse} 1.5s infinite ease-in-out;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); /* Added box-shadow */
  }
`;

export const Photo = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  transition:
    transform 0.3s ease,
    filter 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
`;
