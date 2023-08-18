import { styled } from 'styled-components';

export const InputFormStyled = styled.form`
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

export const InputStyled = styled.div`
  margin-top: 15px;
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border-radius: 6px;
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

export const ButtonStyled = styled.button`
  margin-top: 20px;
  padding: 8px 12px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  width: 150px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;
