import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import configureStore from '../store/configureStore';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { startAddExpense } from '../actions/expenses';
import getVisibleExpenses from '../selectors/expenses';


// Store creation
const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log('visible', visibleExpenses);
});

const startRaw = [
  { description: 'Barbie', amount: 50}
];

let startStored = [];
startRaw.forEach((start) => {
  startStored.push(store.dispatch(startAddExpense(start)));
});


