import styled from "styled-components";

export const ButtonStyle = styled.button `
    width: 100%;
    height: 48px;

    border-radius: 4px;

    background-color: var(--color-primary-negative);

    p {
        color: var(--grey-0);
    }

    &.active-btn {
        background-color: var(--color-primary);
        cursor: pointer;
    }

    &.grey {
        background-color: var(--grey-100);
        cursor: pointer;
    }

    &.back {
        padding: 5px 16px;
        width: 67px;
        background-color: var(--grey-300);
        border-radius: 4px;

        p {
            font-size: 12px;
            font-weight: 600;
        }

        cursor: pointer;
    }
`;