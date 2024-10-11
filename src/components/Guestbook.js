// src/components/Guestbook.js
import React, { useState } from 'react';
import useGuestbook from '../hooks/useGuestbook';

const Guestbook = () => {
  const { entries, addEntry } = useGuestbook();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      await addEntry(name, message);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="guestbook">
      <h2>Guestbook</h2>
      <form onSubmit={handleSubmit} className="guestbook-form">
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type="submit" className="button">
          Sign Guestbook
        </button>
      </form>
      <div className="guestbook-entries">
        {entries.map((entry) => (
          <div key={entry.id} className="guestbook-entry">
            <h4>{entry.name}</h4>
            <p>{entry.message}</p>
            <span>{new Date(entry.timestamp.seconds * 1000).toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
