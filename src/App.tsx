import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpem, setIsNewTransactionModalOpem] = useState(false);

  function handleOpemNewTransaction() {
    setIsNewTransactionModalOpem(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpem(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpemNewTransaction} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpem}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
