import styled from 'styled-components';
import {ReactComponent as Logo} from "../../assets/tasky_logo.svg";
import {ReactComponent as BellLogo} from "../../assets/bell.svg";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //background-color: white;
  //margin-bottom: 25px;
  position: sticky;
  top:0;
  z-index: 5;
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
  cursor: pointer;
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
  height: 25px;
  width: 75px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 17px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #FDC027;
  text-align: center;
  border-radius: 15px;
`;

export const HeaderSignup = styled.div`
  height: 25px;
  width: 75px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 17px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  border-radius: 15px;
  background-color: #333333;
`;

export const HeaderSignout = styled.div`
  height: 25px;
  width: 75px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 17px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #4B3D84;
  text-align: center;
  border-radius: 15px;
`;

export const HeaderTasksCounter = styled.div`
  //display: flex;
  border: 2px solid #EC0016;
  border-radius: 1000px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  font-size: 20px;
  color:#EC0016;
  text-align: center;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
`;

export const HeaderBellLogo = styled(BellLogo)`
  width: 18px;
  height: 18px;
  margin-right: 5px;
  //cursor: pointer;
  //margin-left: 20px;
`;

export const HeaderTasksReminder =  styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;


