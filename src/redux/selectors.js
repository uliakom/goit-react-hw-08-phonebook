export const getContacts = state => state.contacts.contacts;

export const getFilterValue = state => state.contacts.filter;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getUserToken = state => state.auth.token;
