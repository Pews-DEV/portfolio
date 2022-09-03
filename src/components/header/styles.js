import styled from 'styled-components'

export const Header = styled.header`
  grid-area: header;
  background: #101010;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 60px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 426px) {
    justify-content: flex-start;
  }
`

export const Link = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  color: white;

  @media (min-width: 426px) {
    font-size: 14px;
  }
`;