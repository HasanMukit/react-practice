import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
const App = () => {
  const expenseData = [
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
  const addExpenseHandler = (expense) => {
    console.log('app.js')
    console.log(expense)

  }
  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expenses expense={expenseData} />

    </div>
  );
}

export default App;
