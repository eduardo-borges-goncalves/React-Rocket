import styled from "styled-components";

export const Container = styled.header`
    background-color: var(--blue);
    color: white;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 12rem ;

    button {
        background-color: var(--blue-light);
        border: none;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;
        color: #fff;
        font-size: 1rem;

        transition: filter 0.2s ;

        &:hover {
            filter: brightness(0.9);
        }
    }
`