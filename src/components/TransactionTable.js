import React from "react";
import TransactionTableRow from "./TransactionTableRow";

function TransactionTable({ transactionsArray, deleteTransaction }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactionsArray.map((transaction) => (
          <TransactionTableRow
            key={transaction.id}
            transactionItem={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </tbody>
    </table>
  );
}
export default TransactionTable;
