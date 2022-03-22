import styled from "styled-components";
import {transparentize} from "polished"

export const Container = styled.form `
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        height: 3rem;
        padding: 0 1.5rem ;

        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        height: 3rem;
        background-color: var(--green);
        color: #FFF;
        border: none;
        border-radius: 0.25rem;
        margin-top: 1rem;
        font-size: 1rem;
        font-weight: 600;
        padding: 0 1.5rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
`

interface RadioBoxProps {
    isActive: boolean,
    activeColor: "red" | "green"
}

const colors = {
    red: "#E52E4D",
    green: "#33cc95"
}

export const RadioBox = styled.button<RadioBoxProps>`
        width: 50%;
        height: 3rem;
        padding: 0 1.5rem;
        margin: 1rem 0rem;
        
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: ${(props) => props.isActive? 
            transparentize( 0.9, colors[props.activeColor]) :
            "transparent"
        };

        font-weight: 400;
        font-size: 1rem;
        color: var(--text-title);
        
        &:hover {
            filter: brightness(0.9);
        }

`
