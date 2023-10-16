import { InputStyle } from "./style";

export function Input({label, placeholder, type, onRegister}) {
    return (
        <InputStyle>
            <label className="headline">{label}</label>
            <input type={type} placeholder={placeholder} {...onRegister}/>
        </InputStyle>
    );
};