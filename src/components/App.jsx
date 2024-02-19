// App.jsx
import React, { useState } from 'react';
import {ContactForm} from './ContactForm';
import {ContactList} from './ContactList';
import { nanoid } from 'nanoid';

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

  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
        className="filter-input"
      />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}
