import React from "react";
import TransactionTable from "./TransactionTable";

function Transactions({transact}){
    return (
    <div>
        <h2>All Transactions</h2>
            {transact.map((transactionData) => ( 
                <TransactionTable 
                    key={transactionData.id} 
                    date={transactionData.date}
                    description={transactionData.description}
                    category={transactionData.category}
                    amount={transactionData.amount}
                />
            ))}
    </div>
    )
}
export default Transactions;