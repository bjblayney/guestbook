// src/hooks/useGuestbook.js
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';

const useGuestbook = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'guestbookEntries'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const entriesData = [];
      querySnapshot.forEach((doc) => {
        entriesData.push({ id: doc.id, ...doc.data() });
      });
      setEntries(entriesData);
    });

    return () => unsubscribe();
  }, []);

  const addEntry = async (name, message) => {
    try {
      await addDoc(collection(db, 'guestbookEntries'), {
        name,
        message,
        timestamp: new Date(),
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return { entries, addEntry };
};

export default useGuestbook;
