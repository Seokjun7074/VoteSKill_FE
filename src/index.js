import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyle';
import App from 'App';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </ThemeProvider>,
  // </React.StrictMode>,
);
