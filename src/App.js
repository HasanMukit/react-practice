import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
const DUMMY_EXPENSES = [
  {
    title: 'Car Isurance',
    amount: 290.67,
    date: new Date(2021, 2, 28)
  },
  {
    title: 'Gas',
    amount: 390.67,
    date: new Date(2021, 3, 27)
  },
  {
    title: 'Tax',
    amount: 490.67,
    date: new Date(2021, 4, 26)
  },
  {
    title: 'Servicing',
    amount: 590.67,
    date: new Date(2021, 5, 25)
  }
]
const App = () => {
  const [expenseData, setExpenseData] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    
    setExpenseData(prevExpense => {
      return [expense, ...prevExpense]
    })

  }
  const processYearSelectionFilter = (selectedYear) => {
    console.log(selectedYear)
  }
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler}/>
      <Expenses
        items={expenseData} 
        onProcessYearSelectionFilter = {processYearSelectionFilter}
      />

    </div>
  );
}

export default App;
