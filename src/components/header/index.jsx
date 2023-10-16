import { LogoIcon } from "../../assets/icon/logo";
import { HeaderStyle } from "./style";

export function Header({children, space, dashboard}) {

    const headerButton = () => {
        if (children) {
            return children
        }
    }

    return (
        <HeaderStyle className={`${space} ${dashboard}`}>
            <LogoIcon/>
            {headerButton()}
        </HeaderStyle>
    );
};