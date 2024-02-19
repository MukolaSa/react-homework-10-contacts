import React from 'react';

export function ContactList({ contacts, deleteContact }) {
  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          <div>{contact.name}</div>
          <div>{contact.number}</div>
          <button onClick={() => deleteContact(contact.id)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
}


// state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
//     name: '',
//     number: ''
//   }