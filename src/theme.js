import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#ff4d00',
  secondary: '#2e2e2e',
  accent: '#ffcc00',
  light: '#f8f8f8',
  dark: '#333',
  text: '#444',
  fontMain: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
};

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fontMain};
    line-height: 1.6;
    color: ${props => props.theme.text};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${props => props.theme.accent};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  main {
    min-height: 70vh;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.dark};
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    cursor: pointer;
    font-family: ${props => props.theme.fontMain};
  }

  section {
    padding: 80px 0;
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 0;
    }
    
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.7rem;
    }
    
    h3 {
      font-size: 1.3rem;
    }
  }
`;