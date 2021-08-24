import React from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';


// use rsc shortcut for arrow function

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
};

// use rsc shortcut for arrow function
export default NewExpense;