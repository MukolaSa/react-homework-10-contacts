import React, { useReducer, createContext } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

export const ContactsContext = createContext();

const initialState = {
  contacts: [],
  filter: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addContact = (name, number) => {
    dispatch({
      type: 'ADD_CONTACT',
      payload: { id: nanoid(), name, number }
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: 'DELETE_CONTACT',
      payload: id
    });
  };

  const handleFilterChange = (e) => {
    dispatch({
      type: 'SET_FILTER',
      payload: e.target.value
    });
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  const contactsContextValue = {
    contacts: state.contacts,
    addContact,
    deleteContact
  };

  return (
    <ContactsContext.Provider value={contactsContextValue}>
      <div className="app-container">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <input
          type="text"
          value={state.filter}
          onChange={handleFilterChange}
          placeholder="Search contacts..."
          className="filter-input"
        />
        <ContactList />
      </div>
    </ContactsContext.Provider>
  );
}