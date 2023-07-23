import React from "react";
import TransactionTableRow from "./TransactionTableRow";

function TransactionTable(header){

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
                <TransactionTableRow header={header}/>
            </tbody>
        </table>
    )
}
export default TransactionTable;