import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global.ts"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router.tsx"



function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router/>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>

  )
}

export default App
