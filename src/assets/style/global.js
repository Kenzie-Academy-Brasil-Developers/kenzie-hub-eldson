import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;

        border: none;
        outline: none;

        text-decoration: none;
        list-style: none;
    }

    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        --grey-400: #121214;
        --grey-300: #212529;
        --grey-200: #343B41;
        --grey-100: #868E96;
        --grey-0: #F8F9FA;

        --success: #3FE864;
        --negative: #E83F5B;
    }

    body, html {
        font-family: "Inter", sans-serif;
        background-color: var(--grey-400);
    }

    .title-1, .title-2 {
        font-weight: 700;
        font-size: 18px;
    }

    .title-2 {
        font-size: 16px;
    }

    .headline, 
    .headline-bold, 
    .paragraph {
        font-weight: 400;
        font-size: 12px;
    }

    .headline-bold {
        font-weight: 600;
    }

    .paragraph {
        font-size: 16px;
    }
`;