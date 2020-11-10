import styled from 'styled-components';
import {ReactComponent as Logo} from "../../assets/signup.svg";

export const SignupPageContainer =  styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-left: 10px;
  margin-top: 40px;
`;

export const SignupPageLogo = styled(Logo)`
  display: flex;
  width: 65%;
  height: 80%;
  margin-right: 20px;
`;