import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../Redux/store';

export function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  return (
    <ul className="contact-list">
      {contacts.map(contact => (
        <li key={contact.id} className="contact-item">
          <div>{contact.name}</div>
          <div>{contact.number}</div>
          <button onClick={() => dispatch(deleteContact(contact.id))} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
}
