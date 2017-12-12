import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import configureStore from '../store/configureStore';
import kidsReducer from '../reducers/kids';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { addKid, removeKid, editKid } from '../actions/kids';
import { setKidsTextFilter, setShowKidsActive, setShowKidsInactive } from '../actions/kidsFilters';
import getVisibleKids from '../selectors/kids';


// Store creation
const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleKids = getVisibleKids(state.kids, state.kidsFilters);
  console.log('visible', visibleKids);
});

const kidsStartRaw = [
  { firstName: 'Barbie', lastName: 'Cool', parents: ['James'], isActive: true},
  { firstName: 'Intrus', lastName: 'Anonymus', parents: ['Non pertinent'], createdAt: -1000 },
  { firstName: 'Carolane', lastName:'Berg', parents: ['Guylaine'], isActive: true },
  { firstName: 'Amélie', lastName: 'Berg', parents: ['Francis'] },
  { firstName: 'Vicky', lastName: 'Kli', parents: ['Chantal'] },
  { firstName: 'Anne-Sophie', lastName: 'Kli', parents: ['Jochen'] }
];

let kidsStartStored = [];
kidsStartRaw.forEach((kid) => {
  kidsStartStored.push(store.dispatch(addKid(kid)));
});

store.dispatch(addKid(kidsStartRaw[0]));

store.dispatch(removeKid({ id: kidsStartStored[1].kid.id }));
store.dispatch(editKid(kidsStartStored[0].kid.id, { lastName: 'Resto Bar'}));

store.dispatch(setKidsTextFilter('o'));
store.dispatch(setShowKidsActive(true));
store.dispatch(setShowKidsInactive(true));

