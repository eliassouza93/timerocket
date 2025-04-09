
import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secundary' | 'danget' | 'success'

interface ButtonContainerTipo {
  variant: ButtonVariant;
}
const ButtonVariant ={
 primary: 'purple',
 secondary: 'orange',
 danger: 'red',
 success:'green'
}


export const ButtonContainer = styled.button<ButtonContainerTipo>`
  width: 100px;
  height: 40px;
  background-color: ${props => props.theme['green-500']};

 
`
