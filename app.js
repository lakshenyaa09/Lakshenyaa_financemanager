// app.js
// Main app to test personal finance manager

const pfm = require('./yourname_personalFinanceManager');

console.log("Testing Personal Finance Manager...");

// Add some transactions
pfm.addTransaction({
    type: "income",
    amount: 3000,
    category: "Salary",
    date: "2025-05-01"
});

pfm.addTransaction({
    type: "expense",
    amount: 500,
    category: "Groceries",
    date: "2025-05-03"
});

pfm.addTransaction({
    type: "expense",
    amount: 200,
    category: "Transport",
    date: "2025-05-05"
});

// Display outputs
console.log("All Transactions:", pfm.getTransactions());
console.log("Balance:", pfm.calculateBalance());
console.log("Groceries Expenses:", pfm.getExpensesByCategory("Groceries"));
console.log("May 2025 Summary:", pfm.getMonthlySummary(5, 2025));
