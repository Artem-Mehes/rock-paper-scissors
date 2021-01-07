import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../interfaces';

const GlobalStyle = createGlobalStyle<{theme: ITheme}>`
    html {
        height: 100%;
        box-sizing: border-box;
        line-height: 1;
        letter-spacing: 2px;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${({ theme }) => theme.colors.bgGradient};
        font-family: ${({ theme }) => theme.font};
        color: ${({ theme }) => theme.colors.regularText};
        padding: 2rem;
        height: inherit;

        @media (max-width: 710px) {
            padding: 1rem;
        }
    }

    h1 {
        margin: 0;
    }

    button {
        letter-spacing: inherit;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: inherit;
    }
`;

export default GlobalStyle;
