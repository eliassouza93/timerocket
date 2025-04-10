import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header.tsx";
import { LayoutContainer } from "./styles.ts";
 


export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}