import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0.5rem;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
  }
`;

export const Id = styled.p`
  font-size: 14px;
  color: #999;
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  &::before {
    content: '🔑'; /* Icon before ID */
    margin-right: 6px;
  }
`;

export const Photographer = styled.p`
  font-size: 16px;
  color: #bbb;
  margin-top: 8px;
  font-style: italic;
  display: flex;
  align-items: center;
  &::before {
    content: '📖';
    margin-right: 8px;
  }
`;

export const PhotographerUrl = styled.a`
  font-size: 18px;
  color: #6fbcff;
  margin-top: 8px;
  line-height: 1.6;
  text-align: justify;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #49aaff;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0 6px 12px rgba(255, 255, 255, 0.2);
    }
  }
`;

export const ImageDetailsSpinnerContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
