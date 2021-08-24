import React from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';


// use rsc shortcut for arrow function

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm/>
        </div>
    );
};

// use rsc shortcut for arrow function
export default NewExpense;