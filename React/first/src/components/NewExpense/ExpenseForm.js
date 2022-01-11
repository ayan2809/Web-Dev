import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    // title change handler
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    // amount change handler
    const amountChangeHandler =(event) =>{
        setEnteredAmount(event.target.value);  
    };

    // date change handler
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date:  new Date(enteredDate)
        };
        console.log(expenseData);

        // this is important for making the input
        // empty after submitting the data
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="title" >Title</label>    
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="title">Amount</label>    
                <input type="number" min="0.01" step="0.01" value={enteredAmount}  onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="title">Date</label>    
                <input type="date" min="2019-01-01" max ="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>            
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;