
import styled, {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secundary' | 'danget' | 'success'

interface ButtonContainerTipo {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: ' purple',
  secundary: 'orange',
  danget: 'red',
  success: 'green'

}

export const ButtonContainer = styled.button<ButtonContainerTipo>`
  width: 100px;
  height: 40px;
  ${props => {
    return css `background-color: ${buttonVariants[props.variant]}`
  }}
`
