import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/Global";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider>
  )
}

