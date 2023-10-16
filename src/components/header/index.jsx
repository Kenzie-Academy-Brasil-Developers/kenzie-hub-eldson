import { LogoIcon } from "../../assets/icon/logo";
import { HeaderStyle } from "./style";
import { useState } from "react";

export function Header({children, space}) {

    const headerButton = () => {
        if (children) {
            return children
        } else {
            
        }
    }

    return (
        <HeaderStyle className={space}>
            <LogoIcon/>
            {headerButton()}
        </HeaderStyle>
    );
};