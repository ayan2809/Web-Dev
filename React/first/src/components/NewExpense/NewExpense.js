import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense =(props) =>{

    // handler to get the data from the form
    const SaveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    }

    // on save expense data
    // get expense data from the form
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
    </div>
};

export default NewExpense;