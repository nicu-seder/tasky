import styled from 'styled-components';
import {ReactComponent as  LocationLogo} from "../../assets/placeholder.svg";
import {ReactComponent as  TimeLogo} from "../../assets/clock.svg";

export const TaskItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  height: 100%;
  width: 100%;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  
`;

export  const TaskItemTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  border-left: 2px solid #4B3D84;
  background-color: #f5f9ff;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  align-items: center;
  align-content: center;
  margin-right: 15px;
`;

export const TaskItemTitle = styled.div`
  font-size: 14px;
  text-align: start;
  color: #4B3D84;
  font-family: 'Open Sans Condensed', sans-serif;
  margin: 5px 15px;
`;

export const TaskItemSubtitle = styled.div`
  color: grey;
  font-size: 15px;
  text-align: start;
  height: 100%;
  //width: 100%;
  padding: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  margin-right: 10px;
`;

export const TaskItemLocation = styled.div`
  color: grey;
  font-size: 15px;
  text-align: start;
  height: 100%;
  //width: 100%;
  padding: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  margin-right: 10px;
`;

export const TaskItemTimeLeft = styled.div`
  color: grey;
  font-size: 15px;
  text-align: start;
  height: 100%;
  //width: 100%;
  padding: 3px;
  font-family: 'Open Sans Condensed', sans-serif;
  margin-right: 10px;
`;

export  const TaskItemLocationLogo = styled(LocationLogo)`
  width: 18px;
  height: 18px;
`;

export  const TaskItemClockLogo = styled(TimeLogo)`
  width: 18px;
  height: 18px;
`;


