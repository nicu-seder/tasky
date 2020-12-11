import styled from 'styled-components';

export const TaskDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const TaskDateMonth = styled.div`
  display: flex;
  color: ${({isToday})=>isToday?'#EC0016':'grey'};
  font-size: 18px;
  margin-left: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
`;

export const TaskDateDay = styled.div`
  display: flex;
  color: ${({isToday})=>isToday?'#EC0016':'grey'};
  font-size: 40px;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bold;
`;

export  const TaskDateToday = styled.div`
  display: flex;
  color: ${({isToday})=>isToday?'#EC0016':'grey'};
  font-size: 15px;
  margin-left: 10px;
  font-family: 'Open Sans Condensed', sans-serif;
  //font-weight: bold;
`;

