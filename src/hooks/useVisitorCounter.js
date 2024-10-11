// src/hooks/useVisitorCounter.js
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc, updateDoc, increment } from 'firebase/firestore';

const COUNTER_DOC = 'counters/visitorCount';

const useVisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const updateCounter = async () => {
      const counterRef = doc(db, 'counters', 'visitorCount');
      await updateDoc(counterRef, {
        count: increment(1),
      });
      const docSnap = await getDoc(counterRef);
      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      }
    };
    updateCounter();
  }, []);

  return count;
};

export default useVisitorCounter;
