import { ButtonContainer, ButtonVariant } from './Button.styles';


interface ButtonTipe {
    variant?: ButtonVariant
}

export function Buttonprops({ variant = 'primary' }: ButtonTipe) {
    return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}