import { ThemeProvider } from "styled-components"
import { Buttonprops } from "./Components/Button"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global.ts"


function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Buttonprops variant={'secundary'} />


      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
