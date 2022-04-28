import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html, body {
    margin: 0;
  }
  
  html {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.black};
  }

  #main, body {
    height: 100%;
  }
  
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .header-link {
    text-decoration: none;
  }
`;
