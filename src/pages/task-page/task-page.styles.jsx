import styled from 'styled-components';
import {ReactComponent as Logo} from "../../assets/plant.svg";

export const TaskPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:90%;
  height: 100%;
  margin-top: 25px;
  //padding: 20px;
  justify-content: center;
  align-items: start;
`;

export const TaskPageWelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  //height: 100px;
  margin-bottom: 50px;
  background-color: #f8f9ff;
  border: 1px solid #f8f9ff;
  border-radius: 5px;
  padding: 15px;
`;

export const TaskPageWelcomeInformation =  styled.div`
  display: flex;
  flex-direction: column;
  //width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 15px;
`;


export const TaskPageWelcomeLogo = styled(Logo)`
  height: 150px;
  width: 200px;
  margin-left: 15px;
`;

export const TaskPageWelcomeTitle = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 30px;
   color: #4B3D84;
`;

export const TaskPageWelcomeSubtitle= styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 18px;
  color: #4B3D84;
`;

export const TaskPageWelcomeCurrentDate= styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 45px;
  font-weight: bold;
  color: #4B3D84;
`;

export const TaskPageGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  //height: 100%;
  //overflow-y: scroll ;
  //overflow-x: hidden;

`;

