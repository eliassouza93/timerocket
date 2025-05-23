import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }
    :focus{
           box-shadow: 0 0 0 2px ${props => props.theme["gray-500"]};
        outline: 0;
    }
    body{
        background: ${props => props.theme["gray-900"]};
        color: ${props => props.theme["gray-300"]};
    }
    body, input, textarea, button {
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
     font-size: 1rem;
   }


`