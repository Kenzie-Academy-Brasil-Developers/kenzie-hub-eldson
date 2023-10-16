import { FormStyle } from "./style";

export function Form({title, children, onSubmit}) {
    return (
        <FormStyle onSubmit={onSubmit} noValidate>
            <h1 className="title-1">{title}</h1>
            {children}
        </FormStyle>
    );
};