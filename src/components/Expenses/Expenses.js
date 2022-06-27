import React, { useState } from 'react';

//import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = (selectedYear) => {
     setFilteredYear(selectedYear);
   };

   const filterExpenses=props.items.filter(expense=>{
     return expense.date.getFullYear().toString()===filteredYear;
   })

   //console.log(props.items[0].date.getFullYear());

  return (
    <div>
      <Card className='expenses'>
         <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        /> 
        <ExpenseChart expenses={filterExpenses}/>
        <ExpenseList items={filterExpenses}/>

      </Card>
    </div>
  );
};

export default Expenses;