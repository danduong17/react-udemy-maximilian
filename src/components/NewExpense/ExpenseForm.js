import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // Set States for input. The parameter that useState taking firstly is empty string because when this component initially is rendered for the first time, nothing was entered
    const [enteredTitle, setEnteredTitle] = useState('');
    // useState often takes string as a parameter. It'll always be a string even if it stores a number because it'll be a number as a string & same for date
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // There're multiple ways to create event handler functions when input changes: 3-state (current), 1-state approach (1 state includes title, amount, date), shared event handler function
    // Watch video 75, 76 & 77 to know more alternatives
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        console.log(enteredTitle);
    }
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        /* 
            Default browser behavior when submitting form is to reload webpage because 
            browser actually automatically sends a request whenever a form is submitted 
            to the server which is hosting this webpage - in this case this development server.
            Use preventDefault() method of JavaScript to prevent the request being sent by default.
            Since the request is not sent, the page won't reload because we stay on the currently loaded page
            without sending any request anywhere.
        */
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        
        props.onSaveExpenseData(expenseData);

        // Clear form for next input by resetting all variables to empty
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" name="title" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" name="amount" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" name="date" min="2019-01-01" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;