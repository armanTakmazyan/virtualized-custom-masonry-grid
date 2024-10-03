import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BackButton = styled.button`
  cursor: pointer;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 10px 15px;
  font-size: 24px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #16a157;
  transition: background 0.3s ease;
  &:hover {
    background: #0bc76f;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
    color: #ffffff;
  }
  &:focus {
    outline: none;
  }
`;

export const Title = styled.h1`
  margin: 0;
  padding: 12px 0px;
  flex-grow: 1;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  position: relative;
`;
