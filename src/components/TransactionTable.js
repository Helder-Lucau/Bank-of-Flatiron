import React from "react";

function TransactionTable(props){

    return (
        <div>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                </tr>
            <tr>
                <td>{props.date}</td>
                <td>{props.description}</td>
                <td>{props.category}</td>
                <td>{props.amount}</td>
            </tr>
        </div>
    )
}
export default TransactionTable;