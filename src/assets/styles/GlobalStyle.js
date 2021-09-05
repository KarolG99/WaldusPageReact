import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,600;0,700;1,700&display=swap'); */
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    *, *::after, *::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Poppins', sans-serif;
        overflow-x: hidden;
    }
    a, button {
        font-family: 'Poppins', sans-serif;
    }
`;
