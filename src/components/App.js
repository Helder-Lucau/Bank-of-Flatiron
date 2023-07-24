import React, { useEffect, useState } from "react";
import Transactions from "./Transactions";
import Form from "./Form";
import SearchTransaction from "./SearchTransaction";

function App() {

  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTransaction(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <SearchTransaction />
      <Form updateSetTransaction={setTransaction}/>
      <Transactions transact={transaction} />
    </div>
  );
}
export default App;
