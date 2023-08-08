import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import service from '../services/file-upload.service';
import './ProfilePage.css';
import '../globals.css';
import BackLink from '../components/BackLink';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-page__container">
      <div className="profile-page__header">
        <BackLink />
      </div>
      <div className="profile-page__content">
        <div className="avatarProfile">
          <img src={user.avatar} alt="" />
        </div>
        <div className="profileInfo">
          <div className="info">
            <p className="subtitle">User name</p>
            <div>{user.username}</div>
          </div>

          <div className="info">
            <p className="subtitle">Email address</p>
            <div>{user.email}</div>
          </div>

          <div className="info">
            <p className="subtitle">Password</p>
            <div>***********</div>
          </div>
          <Link to="/profile/edit" className="hyperlink--sm">
            <Icon icon="material-symbols:edit-outline"></Icon>Edit / Delete profile
          </Link>
        </div>
      </div>
    </div>
  );
}
