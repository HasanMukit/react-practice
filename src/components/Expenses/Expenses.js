import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import Card from "../UI/Card";
import './Expenses.css'
const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2020")
    const yearSelectionHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }
    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear
    })
    let expnsesContent = <p>No Expnse Found</p>
    if (filteredExpenses.length > 0) {
        expnsesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }
    return (
        <Card className="expenses">
            <ExpensesFilter
                onYearSelection={yearSelectionHandler}
                selectedYear={filterYear}
            />
            {expnsesContent}
        </Card>
    );
}
export default Expenses