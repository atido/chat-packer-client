import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import Logo from './Logo';
import Menu from './Menu';
import './NavBar.css';

export default function NavBar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <Menu />
      <Logo isSmall={true} />
      <Link to="/profile">
        <div className="avatarNav">{user && <img src={user.avatar} alt="user avatar" />}</div>
      </Link>
    </div>
  );
}
