import { InputStyle } from "../input/style";

export function Selection({label, options, onRegister}) {
    return (
        <InputStyle>
            <label className="headline">{label}</label>
            <select {...onRegister}>
                <option value="nenhum">Nenhum</option>
                {options.map((data, key) => {
                    return (
                        <option key={key} value={data}>{data}</option>
                    )
                })}
            </select>
        </InputStyle>
    );
};