import Modal from "react-modal"

interface NewTransactionProps{
    isOpen: boolean;
    onRequestClose: () => void
}

export function NewTransaction ({isOpen, onRequestClose}:NewTransactionProps ) {
    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}>
            <h1>Cadastrar Transação</h1>
        </Modal>
    )
}