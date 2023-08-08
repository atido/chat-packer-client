import { Icon } from '@iconify/react';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import service from '../services/file-upload.service';
import './ProfilePage.css';
import '../components/Form.css';
import BackLink from '../components/BackLink';
import { Link } from 'react-router-dom';
import EditableField from '../components/EditableField';
import myaxios from '../../myaxios';
import uploadService from '../services/file-upload.service';

export default function ProfilePage() {
  const { user, setUser, refreshUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(user);
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const TagContent = isEditing ? 'form' : 'div';

  const handleEditSubmit = e => {
    e.preventDefault();
    setErrorMessage('');
    myaxios
      .put(`/api/user`, userData)
      .then(res => {
        setUser(res.data.user);
        refreshUser();
        setIsEditing(false);
      })
      .catch(error => setErrorMessage(error.message));
  };

  const handleFileUpload = e => {
    const uploadData = new FormData();
    uploadData.append('avatar', e.target.files[0]);
    // 1. update avatar
    // 2. refresh user (with latest DB infos)
    uploadService
      .uploadImage(uploadData)
      .then(data => uploadService.updateAvatar(data.fileUrl))
      .then(() => refreshUser())
      .catch(error => setErrorMessage(error.message));
  };

  return (
    <div className="profile-page__container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="profile-page__header">
        <BackLink />
      </div>
      <TagContent className="profile-page__content">
        <div className="avatarProfile">
          <img src={user.avatar} alt="avatar" />
        </div>
        {isEditing && (
          <div className="hyperlink--sm">
            <Icon icon={'material-symbols:edit-outline'}></Icon>Edit / Delete photo
            <input type="file" onChange={handleFileUpload} />
          </div>
        )}
        <div className="profileInfo">
          <EditableField
            label="Username"
            type="text"
            value={userData.username}
            onChange={e => setUserData({ ...userData, username: e.target.value })}
            isEditing={isEditing}
          />
          <EditableField
            label="Email"
            type="email"
            value={userData.email}
            onChange={e => setUserData({ ...userData, email: e.target.value })}
            isEditing={isEditing}
          />
          <EditableField
            label="Password"
            type="password"
            value={isEditing ? userData.password : '**********'}
            onChange={e => setUserData({ ...userData, password: e.target.value })}
            isEditing={isEditing}
          />

          {isEditing ? (
            <button className="btn btn--primary" type="submit" onClick={handleEditSubmit}>
              Update
            </button>
          ) : (
            <a onClick={e => setIsEditing(true)} className="hyperlink--sm">
              <Icon icon="material-symbols:edit-outline"></Icon>Edit / Delete profile
            </a>
          )}
        </div>
      </TagContent>
    </div>
  );
}
