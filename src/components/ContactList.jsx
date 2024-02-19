import React, { useContext } from 'react';
import { ContactsContext } from './App';

export function ContactList() {
  const contactsRef = useContext(ContactsContext);

  return (
    <ul className="contact-list">
      {contactsRef.contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          <div>{contact.name}</div>
          <div>{contact.number}</div>
          <button onClick={() => contactsRef.deleteContact(contact.id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
}
