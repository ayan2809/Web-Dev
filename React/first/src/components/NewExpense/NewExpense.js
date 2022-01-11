import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense =() =>{

    const SaveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData
        };
        console.log(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {SaveExpenseDataHandler}/>
    </div>
};

export default NewExpense;