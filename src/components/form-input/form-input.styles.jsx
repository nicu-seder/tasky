import styled  from 'styled-components';

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 10px;
`;

export const FormInputText = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-bottom: #cccccc 1px solid;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #333333;
  font-size: 22px;
`;

export const FormInputLabel = styled.label`
   font-family: 'Open Sans Condensed', sans-serif;
   font-size: 12px;
`;