import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableField from '../components/EditableField';
import SignupLoginTemplate from '../components/SignupLoginTemplate';
import { AuthContext } from '../context/auth.context';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage('');

    login(email, password)
      .then(() => {
        navigate('/trips');
      })
      .catch(err => setErrorMessage(err.message));
  };

  return (
    <SignupLoginTemplate
      heading="Get ready for your next amazing adventure 🏖️"
      subheading="Log in to check your trip details"
      handleSubmit={handleSubmit}
      buttonText="Login"
      redirectText="No account yet?"
      redirectLink="/auth/signup"
      redirectLinkText="Sign Up"
      errorMessage={errorMessage}
    >
      <EditableField label="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <EditableField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </SignupLoginTemplate>
  );
}
