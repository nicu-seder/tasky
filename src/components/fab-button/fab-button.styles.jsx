import styled from "styled-components";

export const FabButtonContainer = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: #4B3D84;
  color:#FDC027;
  justify-content: center;
  align-items: center;
  border-radius: 1000px;
  cursor: pointer;
  position: fixed;
  bottom: 0;
  right:0;
  margin-right: 10px;
  margin-bottom: 10px;
  
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 50px;
  font-weight: bold;
  &:hover{
    background-color: #FDC027;
    color:#4B3D84;
  }
`;

export const FabButtonText = styled.div`
 
`;