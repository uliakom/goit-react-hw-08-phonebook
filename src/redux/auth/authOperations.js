import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
      const { data } = await axios.post('/users/signup', credentials);
      data.user && Report.success(
'Success',
'New user have been registered',
'Ok',
);
    token.set(data.token);
    return data;
  } catch (error) {
    Report.failure(
'Failure',
'You enter incorrect data. <br/><br/>Please try again',
'Ok',
);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {     
Report.failure(
'Failure',
'You enter incorrect email or password .Or you have already logged in. <br/><br/>Please try again',
'Ok',
);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    Notify.failure('You are not logged in.');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
        console.log(error.message);
    }
  },
);

const operations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser
};
export default operations;