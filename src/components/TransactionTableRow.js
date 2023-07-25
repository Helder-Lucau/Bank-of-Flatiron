import React from "react"

function TransactionTableRow({transactionItem, deleteTransaction}){

    const {id, date, description, category, amount} = transactionItem

    function handleDelete(id){
        fetch(`http://localhost:8001/transactions/${id}`, {
            method: "DELETE"
        })
        deleteTransaction(id)
    }

    function handleClick() {
        handleDelete(id)
    }

    return (
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
            <td><button onClick={handleClick}>Delete</button></td>
        </tr>
    )
}
export default TransactionTableRow