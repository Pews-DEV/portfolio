import styled from 'styled-components'

export const Header = styled.header`
  grid-area: header;
  background: #101010;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;

  width: 100%;
  height: 60px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Link = styled.a`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
`;