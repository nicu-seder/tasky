import styled  from 'styled-components';

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  //margin-right: 20px;
`;

export const FormInputText = styled.input`
  width: 100%;
  height: 100px;
  border: none;
  border-bottom: #cccccc 1px solid;
  font-family: 'Open Sans Condensed', sans-serif;
  color: #333333;
  font-size: 18px;
  background-color: #f8f9ff;
`;

export const FormInputLabel = styled.label`
   font-family: 'Open Sans Condensed', sans-serif;
   font-size: 14px;
`;