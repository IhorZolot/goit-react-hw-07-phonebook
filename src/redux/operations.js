import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contacts = axios.create({
  baseURL: 'https://64de661a825d19d9bfb29074.mockapi.io/',
});

export const fetchContacts = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await contacts.get('contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'addContacts',
  async (body, thunkAPI) => {
    try {
      const res = await contacts.post('contacts', body);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'deleteContacts',
  async (id, thunkAPI) => {
    try {
      const res = await contacts.delete(`contacts/${id}`);
      return res.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
