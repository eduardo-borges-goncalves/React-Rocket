import { FormEvent, useState } from "react";
import Modal from "react-modal"
import { Container, TransactionTypeContainer, RadioBox } from "./style";

interface NewTransactionProps{
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransaction ({isOpen, onRequestClose}:NewTransactionProps ) {
    const [type, setType] = useState("deposit")
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction (event: FormEvent) {
        event.preventDefault()
        console.log( 
            type,
            title, 
            value,
            category
        )
    }

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                
                <img src="../../assets/images/close-icon.png" alt="" /> {/*essa merda não funciona */}
                    <input type="text" placeholder="Título" value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <TransactionTypeContainer>
                        <RadioBox 
                            type="button"
                            onClick={() => setType("deposit")}
                            isActive={type === "deposit"}
                            activeColor="green"
                        >
                            <span>Entrada</span>
                        </RadioBox>
                        <RadioBox
                            type="button"
                            onClick={() => setType("withdraw")}
                            isActive={type === "withdraw"} 
                            activeColor="red"                       
                        >
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>
                    <input type="number" placeholder="Preço" value={value}
                        onChange={(event) => setValue(Number(event.target.value))}
                    />
                    <input type="text" placeholder="Categoria" value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
            </Container> 
        </Modal>
    )
}