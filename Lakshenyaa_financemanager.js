// This module allows the user to track income and expenses and view financial summaries.
// All data is stored in an in-memory array.

const transactions = [
    // Sample starting data
    { type: "income", category: "Part-Time Job", amount: 1200, date: "2025-04-15" },
    { type: "expense", category: "Transport", amount: 80, date: "2025-04-16" }
];

// Function to add a transaction
// Types allowed: "income" or "expense"
// If invalid type or amount is provided, the function will display an error
function addTransaction(type, category, amount, date) {
    if (type !== "income" && type !== "expense") {
        console.log("Invalid transaction type. Must be 'income' or 'expense'.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Must be a number greater than 0.");
        return;
    }

    transactions.push({
        type,
        category,
        amount: parseFloat(amount),
        date
    });

    console.log(`Added ${type} transaction: ${category} - $${amount} on ${date}`);
}

// Function to view all transactions
// If the array is empty, inform the user
function viewTransactions() {
    console.log("\nAll Transactions:");
    if (transactions.length === 0) {
        console.log("No transactions recorded.");
        return;
    }

    transactions.forEach((t, i) => {
        console.log(`${i + 1}. [${t.type}] ${t.category} - $${t.amount.toFixed(2)} on ${t.date}`);
    });
}

// Function to calculate the total balance
// Balance = total income - total expenses
function calculateBalance() {
    let income = 0;
    let expenses = 0;

    transactions.forEach(t => {
        if (t.type === "income") income += t.amount;
        else if (t.type === "expense") expenses += t.amount;
    });

    const balance = income - expenses;

    console.log(`\nTotal Income: $${income.toFixed(2)}`);
    console.log(`Total Expenses: $${expenses.toFixed(2)}`);
    console.log(`Balance: $${balance.toFixed(2)}`);
}

// Function to display expenses for a specific category
function viewExpensesByCategory(category) {
    const results = transactions.filter(t => t.type === "expense" && t.category.toLowerCase() === category.toLowerCase());

    console.log(`\nExpenses for '${category}':`);
    if (results.length === 0) {
        console.log("No expenses found for this category.");
        return;
    }

    results.forEach((t, i) => {
        console.log(`${i + 1}. $${t.amount.toFixed(2)} on ${t.date}`);
    });
}

// Function to display a summary for a specific month and year
function viewMonthlySummary(month, year) {
    const summary = transactions.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() + 1 === month && d.getFullYear() === year;
    });

    let income = 0;
    let expenses = 0;

    summary.forEach(t => {
        if (t.type === "income") income += t.amount;
        else if (t.type === "expense") expenses += t.amount;
    });

    const balance = income - expenses;

    console.log(`\nSummary for ${month}/${year}:`);
    console.log(`Total Income: $${income.toFixed(2)}`);
    console.log(`Total Expenses: $${expenses.toFixed(2)}`);
    console.log(`Net Balance: $${balance.toFixed(2)}`);
}

// Export all functions and transaction data for testing
module.exports = {
    transactions,
    addTransaction,
    viewTransactions,
    calculateBalance,
    viewExpensesByCategory,
    viewMonthlySummary
};
