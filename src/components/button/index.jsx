import { ButtonStyle } from "./style";

export function ButtonComponent({title, styleType, onClick}) {
    return (
        <ButtonStyle onClick={onClick} className={styleType}>
            <p className="paragraph">{title}</p>
        </ButtonStyle>
    );
};