import React, { useState } from "react";

function Form() {
  const [updateList, setUpdateList] = useState([])
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const transactionInput = {
      date,
      description,
      category,
      amount
    };

    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transactionInput),
    })

    const updateTransactionTable = [...updateList, transactionInput]
    setUpdateList(updateTransactionTable)

  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add New Transaction</h1>
      <label htmlFor="date">Transaction Date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="description">Transaction Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Income">Income</option>
        <option value="Food">Food</option>
        <option value="Fashion">Fashion</option>
        <option value="Gift">Gift</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
        <option value="Housing">Housing</option>
      </select>

      <label htmlFor="amount">Transaction Amount</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
}
export default Form;
