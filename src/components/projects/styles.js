import styled from 'styled-components'

export const Container = styled.section`
  grid-area: projects;
  width: 100%;
  height: 100vh;
  background-color: #101010;

  display: flex;
  flex-direction: column;
  gap: 50px;

  padding: 60px;
  color: white;
`;

export const Board = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

export const CallAction = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 60px;
  cursor: pointer;
`;

export const CallDescription = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const CallGithub = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

export const LeftPanel = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

export const LeftDescription = styled.p`
  width: 143px;
  text-align: right;
  padding-top: 5px;
`;

export const RightDescription = styled.p`
  width: 346px;
  text-align: right;
  padding-right: 5px;
`;