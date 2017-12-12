// Kids Filters Reducer

const kidsFiltersReducerDefaultState = {
  firstName: '',
  lastName: '',
  showActive: true,
  showInactive: false,
  text: '', 
  sortBy: 'firstName'
};

export default (state = kidsFiltersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_KIDS_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_FIRST_NAME_FILTER':
      return {
        ...state,
        firstName: action.firstName
      };
    case 'SET_LAST_NAME_FILTER':
      return {
        ...state,
        lastName: action.firstName
      };
    case 'SET_SHOW_KIDS_ACTIVE':
      return {
        ...state,
        showActive: action.show
      };
    case 'SET_SHOW_KIDS_INACTIVE':
      return {
        ...state,
        showInactive: action.show
      };
      case 'SORT_BY_FIRST_NAME_ASC':
      return {
        ...state,
        sortBy: 'firstName'
      };
      case 'SORT_BY_LAST_NAME_ASC':
      return {
        ...state,
        sortBy: 'lastName'
      };
    default:
      return state;
  }
};
