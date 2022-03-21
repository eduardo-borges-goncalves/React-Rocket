import { Container } from "./styles";

export function Summary () {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                </header>
                <strong>R$ 10000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                </header>
                <strong>- R$ 5000,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                </header>
                <strong>R$ 5000,00</strong>
            </div>
        </Container>
    )
}