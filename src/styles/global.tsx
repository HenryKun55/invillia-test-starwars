import { createGlobalStyle } from 'styled-components';

import backgroundGif from '../assets/background.gif';

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: url(${backgroundGif});
    }

    body, input, button {
        font: 14px Montserrat sans-serif;
    }

    #root {
        margin: 0 auto;
        padding: 20px 50px;
    }

`;
