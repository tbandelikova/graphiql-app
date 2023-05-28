import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Form from './Form';

const SignIn = () => {
  const navigate = useNavigate();
  const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/main');
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error('Unexpected error', err);
      }
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2>Sign In</h2>
        <Form title="Sign in" funcSubmit={logInWithEmailAndPassword} />
      </div>
    </div>
  );
};

export default SignIn;
