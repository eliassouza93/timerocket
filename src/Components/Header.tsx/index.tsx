
import { HeaderContainer } from "./style";
import { Timer, Scroll } from "phosphor-react";


export function Header() {
    return (
        <HeaderContainer>
            <span>Ignite</span>
            <nav>
                <a href="/"> <Timer size={24} /></a>
                <a href="history"> <Scroll size={24}/> </a>
            </nav>
        </HeaderContainer>
    )
}