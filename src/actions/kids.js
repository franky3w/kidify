// import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_KID
const addKid = (kid) => ({
  type: 'ADD_KID',
  kid
});

export const startAddKid = (kidData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      firstName = '',
      lastName = '',
      parents = [],
      createdAt = 0,
      currentGroup = '',
      isActive = true
      } = kidData;
    const kid = { firstName, lastName, parents, createdAt, currentGroup, isActive };

    return database.ref(`users/${uid}/kids`).push(kid).then((ref) => {
      dispatch(addKid({
        id: ref.key,
        ...kid
      }));
    });
  };
};


// REMOVE_KID
const removeKid = ({ id } = {}) => ({
  type: 'REMOVE_KID',
  id
});

export const startRemoveKid = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/kids/${id}`).remove().then(() => {
      dispatch(removeKid({ id }));
    });
  };
};


// EDIT_KID
export const editKid = (id, updates) => ({
  type: 'EDIT_KID',
  id,
  updates
});

export const startEditKid = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/kids/${id}`).update(updates).then(() => {
      dispatch(editKid(id, updates));
    });
  };
};


// SET_KIDS
const setKids = (kids) => ({
  type: 'SET_KIDS',
  kids
});

export const startSetKids = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/kids`).once('value').then((snapshot) => {
      const kids = [];

      snapshot.forEach((childSnapshot) => {
        kids.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setKids(kids));
    });
  };
};
 