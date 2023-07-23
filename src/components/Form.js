import React, {useState} from "react"


function Form() {
    
    const [formData, setFormData] = useState({
        date: "",
        description: "",
        category: "Income",
        amount: ""
    })

    function handleSubmit(e){
        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add New Transaction</h1>
            <label htmlFor="date">Date</label>
            <input 
                type="date" 
                id="date"
                value={formData.date}
                onChange={(e) => setFormData(e.target.value)}
                />

            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                id="description"
                value={formData.description}
                onChange={(e) => setFormData(e.target.value)}
                />

            <label htmlFor="category">Category</label>
            <select 
                id="category"
                value={formData.category}
                onChange={(e) => setFormData(e.target.value)}
                >
                <option value="Income">Income</option>
                <option value="Food">Food</option>
                <option value="Fashion">Fashion</option>
                <option value="Gift">Gift</option> 
                <option value="Entertainment">Entertainment</option> 
                <option value="Transportation">Transportation</option> 
                <option value="Housing">Housing</option>             
            </select>

            <label htmlFor="amount">Amount</label>
            <input 
                type="number" 
                id="amount"
                value={formData.amount}
                onChange={(e) => setFormData(e.target.value)}
                />

            <button type="submit">Add Transaction</button>
        </form>
    )
}
export default Form