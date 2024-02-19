import React, { useState, createContext } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { nanoid } from 'nanoid';

export const ContactsContext = createContext();

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    setContacts(prevContacts => [...prevContacts, { id: nanoid(), name, number }]);
  };

  const deleteContact = (id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const contactsContextValue = {
    contacts,
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
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search contacts..."
          className="filter-input"
        />
        <ContactList />
      </div>
    </ContactsContext.Provider>
  );
}
