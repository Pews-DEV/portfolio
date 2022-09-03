import styled from 'styled-components'

export const Body = styled.main`
  grid-area: content;
  width: 100%;
  height: 100%;
  background-color: #FFD600;
`
export const Home = styled.section`
  background-color: #FFD600;
  width: 100%;
  height: calc(100vh - 60px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 426px) {
    flex-direction: Row;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 426px) {
    flex-direction: column;
  }

`;

export const Image = styled.img`
  width: 300px;

  @media (min-width: 426px) {
    width: 420px;
  }
  @media (min-width: 769px) {
    width: 500px;
  }
  @media (min-width: 1025px) {
    width: 100%;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  padding-top: 20px;

  @media (min-width: 426px) {
    padding-left: 40px;
  }
  @media (min-width: 769px) {
    padding-left: 60px;
  }
`;

export const Nipon = styled.img`
  width: 300px;

  @media (min-width: 426px) {
    width: 400px;
  }
  @media (min-width: 769px) {
    width: 500px;
    }
  @media (min-width: 1025px) {
    width: 600px;
    }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const Welcome = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  @media (min-width: 426px) {
    font-size: 26px;
  }
  @media (min-width: 769px) {
    font-size: 30px;
  }
  @media (min-width: 1025px) {
    font-size: 34px;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 12px;

  @media (min-width: 426px) {
    font-size: 16px;
  }
  @media (min-width: 769px) {
    font-size: 20px;
  }
  @media (min-width: 1025px) {
    font-size: 24px;
  }
`;
