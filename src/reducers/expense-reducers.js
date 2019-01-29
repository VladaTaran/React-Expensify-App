import React from 'react';
import { createStore, combineReducers } from "redux";
import uuid from 'uuid';






  
 


  

  
  
  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
  });
  
  const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
  const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 30, createdAt: 2000 }));
  // store.dispatch(removeExpense({ id: expenseOne.expense.id }));
  // console.log(expenseOne.expense.id);
  // store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
  // store.dispatch(setTextFilter('rent'));
  // store.dispatch(setTextFilter());
  store.dispatch(sortByAmount());
  // store.dispatch(sortByDate());
  
  // store.dispatch(setStartDate(0));
  // store.dispatch(setStartDate());
  // store.dispatch(setEndDate(1250));

  const demoState = {
    expenses: [{
      id: 'dsjfal',
      description: 'January Rent',
      note: 'This was the final payment for that adrdress',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', //date or amount
      startDate: undefined,
      endDate: undefined
    }
  };
  