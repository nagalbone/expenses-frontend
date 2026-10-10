import { useEffect, useState } from "react";
import { getExpenses } from "../services/expenseService";

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount || 0),
    0
  );

  useEffect(() => {
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    try {
      const response = await getExpenses();

      if (response.success) {
        setExpenses(response.data || []);
      }
    } catch (error) {
      console.error("Failed to load expenses", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Expenses</h2>

      {!loading && expenses.length > 0 && (
        <h3>Total Expense: ₹{totalExpense}</h3>
      )}

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Expense Type</th>
            <th>Amount</th>
            <th>Comment</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" align="center">
                Loading expenses...
              </td>
            </tr>
          ) : expenses.length === 0 ? (
            <tr>
              <td colSpan="4" align="center">
                No expense records found.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense._id}>
                <td>{expense.expenseType}</td>
                <td>₹{expense.amount}</td>
                <td>{expense.comment}</td>
                <td>
                  {new Date(expense.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;