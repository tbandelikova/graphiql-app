import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { useAppDispatch } from '../../hooks/hooks';
import { setUser } from '../../redux/reducers/userSlice';
import Form from './Form';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const registerWithEmailAndPassword = async (email: string, password: string, name?: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user);
      dispatch(
        setUser({
          name: name,
          email: user.email,
          id: user.uid,
        })
      );
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      });
      navigate('..');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };

  return (
    <div className="register">
      <div className="register__container">
        <h2>Sign Up</h2>
        <Form title="Sign Up" funcSubmit={registerWithEmailAndPassword} />
      </div>
    </div>
  );
};

export default SignUp;
