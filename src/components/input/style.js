import styled from "styled-components";

export const InputStyle = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;

    label {
        color: var(--grey-0);
    }

    input {
        margin-bottom: 22px;
        padding-left: 16px;
        width: calc(100% - 16px);
        height: 48px;
        border-radius: 3px;

        &:focus {
            border: 1px solid var(--grey-0);
            transition: all.5s;
        }

        background-color: var(--grey-200);
        border: 1px solid transparent;
        color: var(--grey-0);

        &::-webkit-input-placeholder {
            color: var(--grey-100);
        }

        &::-moz-placeholder {
            color: var(--grey-100);  
        }

        &::-moz-placeholder {
            color: var(--grey-100);  
        }

        &:-ms-input-placeholder {  
            color: var(--grey-100);  
        }
    }

    select {
        margin-bottom: 22px;
        padding-left: 16px;
        height: 48px;

        background-color: var(--grey-200);
        color: var(--grey-100);

        option {
            color: var(--grey-0);
        }
    }
`;