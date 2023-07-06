import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString
        };

        props.onAddExpense(expenseData);
        // console.log(expenseData);
    }

    return (
        <div className="new-expense">
            {/* Add a prop whose value is a function to get data from child component (= ExpenseForm) to parent component (=NewExpense & App) */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;