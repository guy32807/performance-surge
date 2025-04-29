import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.main};
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    transition: ${props => props.theme.transitions.standard};
  }

  a:hover {
    color: ${props => props.theme.colors.accent};
  }

  img {
    max-width: 100%;
  }

  ul, ol {
    list-style-position: inside;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  section {
    padding: 80px 0;
  }
`;

export default GlobalStyles;