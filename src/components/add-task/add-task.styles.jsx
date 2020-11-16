import styled from 'styled-components';

export const AddTaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  justify-content: start;
  align-items: center;
  width: 100%;
`;

export const AddTaskButton = styled.div`
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
  &:hover{
    background-color: #FDC027;
  }
`;