import styled from "styled-components";

export const HeaderStyle = styled.header `
    width: calc(369px - 44px);
    display: flex;
    justify-content: center;
    align-items: center;

    &.full-width {
        margin: 0 auto;
        width: 1040px;
        max-width: 95%;
        height: 72px;
    }

    &.space {
        justify-content: space-between;
    }
`;