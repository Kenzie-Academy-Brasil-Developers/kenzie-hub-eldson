import styled from "styled-components";

export const FormStyle = styled.form `
    margin-top: 35px;
    padding: 42px 22px;
    width: calc(369px - 44px);
    max-width: calc(100% - 44px);

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--grey-300);

    h1 {
        width: 100%;
        text-align: center;
        margin-bottom: 22px;
        color: var(--grey-0);
    }

    .p-link-btn {
        margin-top: 34px;
        margin-bottom: 22px;
        color: var(--grey-100);
    }


`;