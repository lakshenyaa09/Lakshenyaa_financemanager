# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax



Assignment 1: Personal Finance Manager (Income & Expense Tracker)

A Node.js module that helps users keep track of their personal financial activities such as income, expenses, savings, and monthly summaries. This module allows recording, viewing, and calculating financial data, which is stored in an in-memory array.

5 Useful Node Functions:

- 1: Add a Transaction (income or expense)
- 2: View All Transactions
- 3: Calculate Balance (Income - Expenses)
- 4: Filter Expenses by Category
- 5: Get Monthly Financial Summary (for a specific month/year)



Set-up

Install Node.js (LTS version)
- [Download Node.js](https://nodejs.org/en/)

To run this Node module, type this in the integrated terminal:
```bash
node app.js

# How to use - Display welcome message 
console.log("Welcome to the Personal Finance Tracker!");

# Function 1: Add a transaction
addTransaction("income", "Salary", 2800, "2025-05-01");
addTransaction("expense", "Food", 200, "2025-05-02");

# Function 2: View all recorded transactions
viewTransactions();
# expected output:
1. [income] Salary - $2800.00 on 2025-05-01
2. [expense] Food - $200.00 on 2025-05-02


# Function 3: Calculate current balance
calculateBalance();
# expected output:
Total Income: $2800.00
Total Expenses: $200.00
Balance: $2600.00

# Function 4: Filter expenses by category
viewExpensesByCategory("Food");
# expected output
Expenses for 'Food':
1. $200.00 on 2025-05-02


# Function 5: Monthly Summary 
viewMonthlySummary(5, 2025);
# expected output: 
Summary for 5/2025:
Total Income: $2800.00
Total Expenses: $200.00
Net Balance: $2600.00





# References
Mint – Intuit Personal Finance
https://mint.intuit.com/

EGL301 Lab 2 – Calculator & Module Testing Format