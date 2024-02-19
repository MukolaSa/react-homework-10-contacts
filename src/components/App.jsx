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

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

