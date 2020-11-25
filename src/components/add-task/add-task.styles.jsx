import styled from 'styled-components';
import{ReactComponent as Logo} from "../../assets/delete.svg";

export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  justify-content: start;
  align-items: start;
  //width: 100%;
  //margin-left: 15px;
  background-color: #FDC02760;
  height: 150px;
  border-radius: 5px;
`;

export const AddTaskButton = styled.div`
  //height: 100%;
  width: 70px;
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 17px;
  margin-left: 15px;
  margin-top: 20px;
  cursor: pointer;
  background-color: #4B3D84;
  text-align: center;
  border-radius: 111px;
  &:hover{
    background-color: #FDC027;
  }
`;

export const AddTaskElement = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9ff;
  height: 100%;
  width: 100%;
  margin-right: 10px;
  justify-content: center;
  border: 1px solid #f8f9ff;
  border-radius: 5px;
`;

export const AddTaskFormElements = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 15px;
`;

export  const AddTaskHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 15px;
`;

export const AddTaskTitle = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 30px;
  font-weight: bold;
  color:#4B3D84;
`;

export const AddTaskCloseWindow = styled(Logo)`
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: 35px;
`;