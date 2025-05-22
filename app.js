const finance = require('./yourname_personalFinanceManager');

console.log("=== Personal Finance Manager ===");

// Add some income and expense transactions
finance.addTransaction("income", "Allowance", 200, "2025-04-10");
finance.addTransaction("expense", "Groceries", 45.50, "2025-04-11");
finance.addTransaction("income", "Tutoring", 150, "2025-04-12");
finance.addTransaction("expense", "Transport", 25, "2025-04-13");

// View all transactions
finance.viewTransactions();

// Calculate and show balance
finance.calculateBalance();

// View expenses for a specific category
finance.viewExpensesByCategory("Groceries");

// Show financial summary for a specific month
finance.viewMonthlySummary(4, 2025); // April 2025
