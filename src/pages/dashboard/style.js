import styled from "styled-components";

export const DashboardStyle = styled.main `
    section {
        width: 100%;
        border-bottom: 1px solid var(--grey-300);
        border-top: 1px solid var(--grey-300);

        display: flex;
        justify-content: center;
        
        .content-section {
            padding: 45px 0px;
            width: 1040px;
            max-width: 95%;

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            h1 {
                color: var(--grey-0);
            }

            p {
                color: var(--grey-100);
            }

        }
    }

    .container {
        border: none;

        .body {
            display: flex;
            flex-direction: column;

            h1 {
                margin-bottom: 23px;
            }
            h1, p {
                color: var(--grey-0);
            }

            p {
                font-weight: 400;
            }
        }
    }
`;