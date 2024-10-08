import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/Global';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ProfileProvider } from './contexts/ProfileContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <ProfileProvider>
          <Router />
        </ProfileProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
