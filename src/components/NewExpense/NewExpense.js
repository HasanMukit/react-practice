import React, { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
  };
  const toggleNewExpenseView = () => {
    setShowForm((prevStatus) => {
      return !prevStatus;
    });
  };
  let newExpenseContent = (
    <button onClick={toggleNewExpenseView}>Add New Expnese</button>
  );
  if (showForm) {
    newExpenseContent = showForm && (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onToggleNewExpenseView={toggleNewExpenseView}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};
export default NewExpense;
