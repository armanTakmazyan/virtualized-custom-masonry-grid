import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 600px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 100px 15px 20px;
  border: 2px solid #ccc;
  border-radius: 50px;
  font-size: 18px;
  outline: none;
  transition: all 0.3s ease;
  &:focus {
    border-color: #16a157;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
  }
  &:hover {
    border-color: #16a157;
  }
`;

export const SearchButton = styled.button`
  border: none;
  outline: none;
  height: 100%;
  padding: 0 17px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  background: #16a157;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 0px 50px 50px 0px;
  &:hover {
    background: #0bc76f;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.6);
  }
`;
