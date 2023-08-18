import styled from 'styled-components';

export const SearchFormstyled = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: #7295c6a1;
  border: 2px solid #2f468396;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const InputEnterStyled = styled.input`
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 6px 7px 4px rgb(0 0 0 / 22%);
  cursor: pointer;
  transition: border-color 0.3s ease;
  input:focus {
    border-color: #0029b3f0;
    outline: none;
  }
`;
