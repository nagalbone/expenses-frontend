import { API_ENDPOINTS } from "../utils/constants";

export const addExpense = async (expenseData) => {
  const response = await fetch(API_ENDPOINTS.EXPENSES, {
    method: "POST",
    credentials: "include", // send HttpOnly cookies
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expenseData),
  });

  return response.json();
};

export const getExpenses = async () => {
  const response = await fetch(API_ENDPOINTS.EXPENSES, {
    method: "GET",
    credentials: "include", // send HttpOnly cookies
    cache: "no-store",
  });

  const data = await response.json();

  return {
    success: response.ok,
    data,
  };
};