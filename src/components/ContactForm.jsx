import React, { useState, useContext, useRef } from 'react';
import { ContactsContext } from './App';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsRef = useContext(ContactsContext);
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    contactsRef.addContact(name, number);
    setName('');
    setNumber('');
    nameInputRef.current.focus();
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          ref={nameInputRef}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
        />
      </div>
      <button type="submit" className="submit-btn">Add Contact</button>
    </form>
  );
}
