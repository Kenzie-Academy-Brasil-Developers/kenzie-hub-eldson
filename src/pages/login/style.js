import styled from "styled-components";

export const FormContainerStyle = styled.main `
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.login {
        height: 100vh;
        padding: 0px;
    }

    .error-message {
        width: 100%;
        padding-bottom: 12px;
        color: var(--negative);
    }

    .container_form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .negative {
        background-color: red;
    }
`;