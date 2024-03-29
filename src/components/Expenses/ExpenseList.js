import React from 'react'
import ExpenseItems from './ExpenseItems';
import './ExpenseList.css'
//returning JSX code on bases of condition
function ExpenseList(props) {
  
    if(props.items.length===0){
      return(
          <h2 className="expenses-list__fallback">Found No Expenses</h2>
      )
    }
  
    return (
    <ul className="expense-list">
       {
       props.items.map((expense) => (
       <ExpenseItems
         key={expense.id}
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
       />
      ))
      }

    </ul>
  )
}

export default ExpenseList