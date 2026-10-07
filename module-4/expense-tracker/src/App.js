import { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Groceries",
      amount: -50,
    },
    {
      id: 2,
      title: "Salary",
      amount: 2300,
    },
    {
      id: 3,
      title: "Phone",
      amount: -1000,
    },
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const addTransaction = (e) => {
    e.preventDefault();

    if (title === "" || amount === "") {
      alert("Please enter title and amount");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title: title,
      amount:
        type === "income"
          ? Number(amount)
          : -Number(amount),
    };

    setTransactions([...transactions, newTransaction]);

    setTitle("");
    setAmount("");
  };

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

  const expense = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce(
      (total, transaction) => total + Math.abs(transaction.amount),
      0
    );

  const balance = income - expense;

  return (
    <div className="page">

      <div className="container">

        <h1>Expense Tracker</h1>

        {/* Balance */}
        <div className="balance">
          <h3>YOUR BALANCE</h3>
          <h2>${balance.toLocaleString("en-US", {
            minimumFractionDigits: 2,
          })}</h2>
        </div>

        {/* Income and Expense */}
        <div className="summary">

          <div className="summary-box">
            <h3>INCOME</h3>
            <p className="income">
              ${income.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>

          <div className="line"></div>

          <div className="summary-box">
            <h3>EXPENSE</h3>
            <p className="expense">
              ${expense.toLocaleString("en-US", {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>

        </div>

        {/* History */}
        <div className="history">

          <h2>History</h2>

          <div className="purple-line"></div>

          {transactions.map((transaction) => (
            <div
              className={`transaction ${
                transaction.amount > 0
                  ? "transaction-income"
                  : "transaction-expense"
              }`}
              key={transaction.id}
            >
              <span>{transaction.title}</span>

              <span>
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toLocaleString(
                  "en-US",
                  {
                    minimumFractionDigits: 2,
                  }
                )}
              </span>
            </div>
          ))}

        </div>

        {/* Add Transaction */}
        <div className="add-section">

          <h2>Add new transaction</h2>

          <div className="purple-line"></div>

          <form onSubmit={addTransaction}>

            <label>Title</label>

            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label>Amount</label>

            <input
              type="number"
              placeholder="Enter amount..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <div className="radio-group">

              <label>
                <input
                  type="radio"
                  name="type"
                  value="income"
                  checked={type === "income"}
                  onChange={(e) => setType(e.target.value)}
                />
                Income
              </label>

              <label>
                <input
                  type="radio"
                  name="type"
                  value="expense"
                  checked={type === "expense"}
                  onChange={(e) => setType(e.target.value)}
                />
                Expense
              </label>

            </div>

            <button type="submit">
              Add transaction
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default App;