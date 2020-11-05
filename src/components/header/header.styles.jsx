import styled from 'styled-components';
import {ReactComponent as Logo} from "../../assets/tasky_logo.svg";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AppLogo = styled(Logo)`
  width: 35px;
  height: 35px;
  margin: 10px;
`;

export const HeaderTitle = styled.div`
  font-family: 'Pacifico', cursive;
  text-decoration: none;
  color: #333333;
  font-size: 18px;
`;

export const HeaderAuthentication = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogin = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: #333333;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

export const HeaderSignup = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: #333333;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`;

export const HeaderSignout = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: #333333;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
`;


