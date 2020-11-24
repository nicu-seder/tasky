import styled from 'styled-components';

export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: start;
  align-items: center;
  width: 60%;
  margin-left: 15px;
`;

export const AddTaskButton = styled.div`
  height: 100%;
  width: 100%;
  font-family: 'Open Sans Condensed', sans-serif;
  text-decoration: none;
  color: white;
  font-size: 17px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #4B3D84;
  text-align: center;
  border-radius: 5px;
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

export const AddTaskElementTitle = styled.div`
  font-family: 'Open Sans Condensed', sans-serif;
  color:#4B3D84;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;
`;