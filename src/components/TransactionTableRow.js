import React from "react"

function TransactionTableRow({header}){

    const {date, description, category, amount} = header

    return (
        <tr>
            <td>{date}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>{amount}</td>
        </tr>
    )
}
export default TransactionTableRow