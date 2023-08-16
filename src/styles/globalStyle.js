import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }
    body {
        overflow-x: hidden;
        font-size: 1.6rem;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    input,
    select,
    button {
        background: none;
        border: none;
        font-size: inherit;
        color: inherit;
        &:focus {
        outline: none;
        }
        &:disabled {
        cursor: not-allowed;
        }
    }
    a,
    button {
        cursor: pointer;
    }
`;
export default GlobalStyle;
