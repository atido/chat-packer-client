import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditableField from '../components/EditableField';
import SignupLoginTemplate from '../components/SignupLoginTemplate';
import { AuthContext } from '../context/auth.context';

export default function SignupPage(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage('');

    signup(username, email, password)
      .then(() => {
        navigate('/trips');
      })
      .catch(err => setErrorMessage(err.message));
  };

  return (
    <SignupLoginTemplate
      heading="Step into to your next delightful journeys🏖️"
      subheading="Sign up to plan effortlessly with your super trip adviser"
      handleSubmit={handleSubmit}
      buttonText="Sign up"
      redirectText="Already have an account?"
      redirectLink="/auth/login"
      redirectLinkText="Login"
      errorMessage={errorMessage}
    >
      <EditableField label="Username" type="username" value={username} onChange={e => setUsername(e.target.value)} />
      <EditableField label="Email" type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <EditableField label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
    </SignupLoginTemplate>
  );
}
