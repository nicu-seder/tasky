import styled from 'styled-components';
import {ReactComponent as Logo} from "../../asstets/tasky_logo.svg";

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

