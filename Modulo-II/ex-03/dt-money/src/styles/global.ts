import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --shape: #FFFFFF;

        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33cc95;
        --blue-light: #6933FF;
        
        --text-title: #363F5F;
        --text-body: #969CB3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87,5%;
        }
    }
    
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgb(0,0,0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .react-modal-content {
        background-color: var(--background);
        width: 576px;
        max-width: 100%;
        border-radius: 0.25rem;
        padding: 3rem;
        position: relative;

    }

`