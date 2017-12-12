// SET_TEXT_FILTER
export const setKidsTextFilter = (text = '') => ({
  type: 'SET_KIDS_TEXT_FILTER',
  text
});

export const setShowKidsActive = (show = true) => ({
  type: 'SET_SHOW_KIDS_ACTIVE',
  show
});

export const setShowKidsInactive = (show = false) => ({
  type: 'SET_SHOW_KIDS_INACTIVE',
  show
});

// SET_FIRST_NAME_FILTER
export const setFirstNameFilter = (firstName = '') => ({
  type: 'SET_FIRST_NAME_FILTER',
  firstName
});

// SET_LAST_NAME_FILTER
export const setLastNameFilter = (lastName = '') => ({
  type: 'SET_LAST_NAME_FILTER',
  lastName
});

// SORT_BY_FIRST_NAME_ASC
export const sortByFirstNameAsc = () => ({
  type: 'SORT_BY_FIRST_NAME_ASC'
});

// SORT_BY_LAST_NAME_ASC
export const sortByLastNameAsc = () => ({
  type: 'SORT_BY_LAST_NAME_ASC'
});

