import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background-color: var(--shape);
        border-radius: 0.25rem;
        padding: 1.5rem 2rem;
    
        strong {
            display: block;
            font-size: 2rem;
            font-weight: 500;
            margin-top: 1rem;
        }

        &.highlight-background {
            background-color: var(--green);
            color: #fff;
        }
    }
`