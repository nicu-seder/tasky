import styled from 'styled-components';
import {ReactComponent as Logo} from "../../assets/playing_cat.svg";

export const TaskPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
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
  width: 40%;
  //position: sticky;
  //top:0;
  //width: 100%;
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

export const TaskPageColumnValues = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 15px;
  margin-bottom: 20px;
  margin-top: 40px;
  background-color: white;
  position: sticky;
  top:0;
`;

export const TaskPageColumnName = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  border-bottom: 1px solid #c4c4c4;
  margin-left: ${({marginLeft})=>`${marginLeft}px`};
  margin-right: ${({marginRight})=>`${marginRight}px`};
  width: ${({widthLength})=>`${widthLength}px`};
  color:#c4c4c4;
`;

export const TaskPageHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

