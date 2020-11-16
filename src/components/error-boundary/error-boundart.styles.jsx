import styled from 'styled-components';

export const ErrorContainer = styled.div`
width: 100%;
height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({imageUrl})=>`url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
`;