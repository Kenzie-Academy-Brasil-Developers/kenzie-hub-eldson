import styled from "styled-components";

export const HeaderStyle = styled.header `
    width: calc(369px - 44px);
    display: flex;
    justify-content: center;
    align-items: center;

    &.space {
        justify-content: space-between;
    }
`;