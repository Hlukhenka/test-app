import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://test-back-5ltd.onrender.com/api/';

export const allEvents = createAsyncThunk(
  'get/events',
  async (page, thunkApi) => {
    try {
      const { data } = await axios.get(`allEvents?page=${page}`);
      return data.events;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getEvent = createAsyncThunk(
  'get/event',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.get(`event/${credentials}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'event/registerUser',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('event/registerUser', credentials);

      alert('Registration successful');
      return data;
    } catch (error) {
      if (error.request.status === 409) {
        alert('Email is already in use!');
      } else {
        alert('Invalid user data!');
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
