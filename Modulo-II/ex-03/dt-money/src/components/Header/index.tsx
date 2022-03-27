import { Container } from "./styles"
import { Content } from "./styles"

interface HandleProps  {
    onOpenNewTransactionModal: () => void
}
export function Header ({onOpenNewTransactionModal}:HandleProps) {
    
    return (
        <Container>
            <Content>
                <h1>dt money</h1>
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>

        </Container>
    )
}