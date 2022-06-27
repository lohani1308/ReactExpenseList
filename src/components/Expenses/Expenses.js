import React, { useState } from 'react';

//import ExpenseItems from './ExpenseItems';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpenseFilter";
import './Expenses.css';
import ExpenseList from './ExpenseList';

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
        {/* other than this we can store value in variable og error message ad if length >0 we can update that variable with mapped array */}
        {/* {filterExpenses.length===0 ? (<p className="error_msg">No Expenses Found</p>) 
        :
        (filterExpenses.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ) ))} */}

        <ExpenseList items={filterExpenses}/>

      </Card>
    </div>
  );
};

export default Expenses;