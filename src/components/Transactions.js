import React from "react";
import TransactionTable from "./TransactionTable";

function Transactions({ transactions, onDeleteTransaction }) {
  return (
    <div>
      <h2>All Transactions</h2>
      <TransactionTable
        deleteTransaction={onDeleteTransaction}
        transactionsArray={transactions}
      />
    </div>
  );
}
export default Transactions;
