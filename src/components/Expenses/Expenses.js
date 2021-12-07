import React, { useState } from 'react';
import ExpnsesList from './ExpensesList.js';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter.js';
import ExpensesChart from './ExpensesChart.js';
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');
  const yearSelectionHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearSelection={yearSelectionHandler}
        selectedYear={filterYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpnsesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
