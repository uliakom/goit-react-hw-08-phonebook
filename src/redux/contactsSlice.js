import { createSlice } from '@reduxjs/toolkit';
import { contactApi } from './api';

export const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },

  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      contactApi.endpoints.getContacts.matchFulfilled,
      (state, { payload }) => {
        state.contacts = payload;
      }
    );
  },
});

export const { addContact, removeContact, filterContact } =
  phoneBookSlice.actions;
