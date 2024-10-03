import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
