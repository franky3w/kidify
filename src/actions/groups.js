import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_GROUP
export const addGroup = (
  {
    groupName = '',
    currentHolder = '',
    holderHistory = [],
    currentEducator = '',
    educatorHistory = [],
    createdAt = 0,
    isActive = false
  } = {}
) => ({
  type: 'ADD_GROUP',
  kid: {
    id: uuid(),
    groupName,
    currentHolder,
    holderHistory,
    currentEducator,
    educatorHistory,
    createdAt,
    isActive
  }
});

// REMOVE_KID
export const removeKid = ({ id } = {}) => ({
  type: 'REMOVE_KID',
  id
});

// EDIT_KID
export const editKid = (id, updates) => ({
  type: 'EDIT_KID',
  id,
  updates
});
