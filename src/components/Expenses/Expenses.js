import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter.js";
import Card from "../UI/Card";
import './Expenses.css'
const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState("2020")
    const yearSelectionHandler = (selectedYear) => {
        
        setFilterYear(selectedYear)
    }
    return (
        <Card className="expenses">
            <ExpensesFilter 
                onYearSelection = {yearSelectionHandler}
                selectedYear = {filterYear}
            />
            {props.items.map((expense) => (
                <ExpenseItem 
                    title ={expense.title}
                    amount ={expense.amount}
                    date ={expense.date}
                />
            ))}
        </Card>
    );
}
export default Expenses