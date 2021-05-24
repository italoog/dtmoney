import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransacitionModal } from "./components/NewTransacitionModal";
import { TransactionsProvider } from "./hooks/useTransactions"

import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpem, setIsNewTransactionModalOpem] =
    useState(false);

   
  function handleOpemNewTransaction() {
    setIsNewTransactionModalOpem(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpem(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpemNewTransaction} />
      <Dashboard />
      <NewTransacitionModal
        isOpen={isNewTransactionModalOpem}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
