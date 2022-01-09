// JSX is java script XML
// import of a component
// import ExpenseItem from './components/ExpenseItem';


import Expenses from './components/Expenses';
function App() {

  const expense = [
    {
      title: 'Car Insurance',
      amount: 500,
      date: new Date(2020, 1, 1)
    },
    {
      title: 'Rent',
      amount: 500,
      date: new Date(2020, 1, 1)
    },
    {
      title: 'Coffee',
      amount: 500,
      date: new Date(2020, 1, 1)
    },
    {
      title: 'Tea',
      amount: 5000,
      date: new Date(2022, 3, 1)
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expense} />
    </div>
  );
}
export default App;
