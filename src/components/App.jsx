import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../Redux/store';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app-container">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
}
