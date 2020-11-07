import  styled from 'styled-components';
import {ReactComponent as  Logo} from "../../assets/welcome_page_logo.svg";

export  const WelcomePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-top:20px;
  justify-content: space-between;
  align-items: center;
`;

export  const WelcomePageInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: start;
`;

export   const WelcomePageTitle = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 50px;
  color:#333333;
  font-weight: bold;
  margin-left: 30px;
  line-height: 45px;
  margin-bottom: 20px;
`;

export  const WelcomePageSubtitle = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 25px;
  color:#333333;
  margin-left: 30px;
`;

export const WelcomePageLogoContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: end;
`;

export const WelcomePageIllustration = styled(Logo)`
  display: flex;
  width:70%;
  height: 100%;
  margin-right: 40px;
`;