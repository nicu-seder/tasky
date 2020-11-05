import styled from 'styled-components';
import {ReactComponent as Logo} from "../../assets/signin.svg";

export const SigninPageContainer =  styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  
`;

export const SigninPageLogo = styled(Logo)`
  display: flex;
  width: 70%;
  height: 100%;
  margin-right: 20px;
`;