import { combineReducers } from '@reduxjs/toolkit';

import { contactsReducer } from 'redux/contacts/contacts-slice';
import filterReducer from 'redux/filter/filter-slice';
import authReducer from 'redux/auth/auth-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
