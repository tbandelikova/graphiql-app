import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, logout } from '../firebase';
import { query, collection, getDocs, where } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAppDispatch } from '../hooks/hooks';
import { removeUser } from '../redux/reducers/userSlice';

//TODO: move "Sign out" to header component

const MainPage = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, 'users'), where('uid', '==', user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };
  const signOut = () => {
    logout();
    dispatch(removeUser());
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate('/auth');
    fetchUserName();
  }, [user, loading]);

  return (
    <main>
      MainPage
      <p>
        You signed in as {name} {user?.email}
      </p>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
};

export default MainPage;
