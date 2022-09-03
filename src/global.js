import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    background-color: #FFD600;
    color: black;
    font-family: 'Inter';
    width: 100%;
    font-size: 87.5%; // 14px
    @media (max-width: 720px) {
      font-size: 81.25%; // 13px
    }
  }
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    width: 100%;
  }
  a {
    cursor: pointer;
  }
  ol, ul {
    list-style: none;
  }
  img {
    max-width: 100%;
  }
  table {
    border-collapse: collapse;
  }
  textarea {
    white-space: revert;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    cursor: not-allowed;
    opacity: .6;
  }
  .hide {
    display: none !important;
  }
`

export default GlobalStyles