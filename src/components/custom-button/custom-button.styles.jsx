import styled, {css} from 'styled-components';

const buttonStyles = css`
  background-color: #333333;
  color:white;
  border: none;
  
  &:hover{
  background-color: #FDC027;
  }
`;

export const Button  = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${buttonStyles};
  margin-right: 5px;
`;