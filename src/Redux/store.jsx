// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  contacts: [],
  filter: ''
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
