// Kids Reducer
//const kidsReducerDefaultState = [];
const kidsReducerDefaultState = [
  { id: '0', firstName: 'Barbie', lastName: 'Cool', parents: ['Tarzan', 'Tintin'], currentGroup: 'ABC', isActive: true},
  { id: '1', firstName: 'Intrus', lastName: 'Anonymus', parents: ['Non pertinent'], currentGroup: 'ABC', createdAt: -1000 },
  { id: '2', firstName: 'Carolane', lastName:'Berg', parents: ['Guylaine'], currentGroup: 'CBA', isActive: true },
  { id: '3', firstName: 'Amélie', lastName: 'Berg', parents: ['Francis'], currentGroup: 'ABC' },
  { id: '4', firstName: 'Vicky', lastName: 'Kli', parents: ['Chantal'], currentGroup: 'ABC' },
  { id: '5', firstName: 'Anne-Sophie', lastName: 'Kli', parents: ['Jochen'], currentGroup: 'ABC' }
];

export default (state = kidsReducerDefaultState, action) => {
  //console.log('coucou kidsReducer')
  switch (action.type) {
    case 'ADD_KID':
      return [
        ...state,
        action.kid
      ];
    case 'REMOVE_KID':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_KID':
      return state.map((kid) => {
        if (kid.id === action.id) {
          return {
            ...kid,
            ...action.updates
          };
        } else {
          return kid;
        };
      });
    case 'SET_KIDS':
      return action.kids;
    default:
      return state;
  }
};
