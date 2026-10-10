import { useState } from "react";
import { addExpense } from "../services/expenseService";
import { toast } from "react-toastify";

function AddExpense() {
  const [expenseData, setExpenseData] = useState({
    expenseType: "",
    amount: "",
    comment: "",
  });

  const handleChange = (e) => {
    setExpenseData({
      ...expenseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await addExpense(expenseData);

    if (response.success) {
      toast.success(response.message);

      setExpenseData({
        expenseType: "",
        amount: "",
        comment: "",
      });
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error("Failed to add expense");
  }
};

  return (
    <div
      style={{
        width: "500px",
        margin: "30px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
      }}
    >
      <h2>Add Expense</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Expense Type</label>
          <br />

          <select
            name="expenseType"
            value={expenseData.expenseType}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
            }}
          >
            <option value="">
              Select Expense Type
            </option>
            <option value="Daily">Daily</option>
            <option value="Medical">Medical</option>
            <option value="Emergency">
              Emergency
            </option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Amount</label>
          <br />

          <input
            type="number"
            name="amount"
            placeholder="Enter Amount"
            value={expenseData.amount}
            onChange={handleChange}
            required
            min="1"
            style={{
              width: "100%",
              padding: "8px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Comment</label>
          <br />

          <textarea
            name="comment"
            placeholder="Enter Comment"
            value={expenseData.comment}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              padding: "8px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Save Expense
        </button>
      </form>
    </div>
  );
}

export default AddExpense;