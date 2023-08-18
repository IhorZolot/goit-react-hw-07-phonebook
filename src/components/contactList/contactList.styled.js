import styled from 'styled-components';

export const ContactNameUlStyled = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ContactNameStyled = styled.li`
  font-size: 16px;
  font-weight: bold;
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 5px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonDeleteStyled = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
