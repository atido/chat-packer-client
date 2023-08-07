import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myaxios from '../../myaxios';

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function storeToken(token) {
    localStorage.setItem('authToken', token);
  }

  async function login(email, password) {
    return myaxios
      .post(`/api/users/login`, { email, password })
      .then(response => {
        storeToken(response.data.authToken);
        setIsLoggedIn(true);
        return refreshUser();
      })
      .catch(err => {
        setIsLoggedIn(false);
        setUser(false);
        throw err;
      });
  }

  async function signup(username, email, password) {
    return myaxios
      .post(`/api/users/register`, { username, email, password })
      .then(response => {
        storeToken(response.data.authToken);
        setIsLoggedIn(true);
        return refreshUser();
      })
      .catch(err => {
        setIsLoggedIn(false);
        setUser(false);
        throw err;
      });
  }

  async function refreshUser() {
    setIsLoading(true);
    return myaxios
      .get('/api/user')
      .then(response => {
        setUser(response.data);
        setIsLoggedIn(true);
      })
      .catch(err => {
        console.log('error while refreshing the user');
        setUser(false);
        setIsLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function logout() {
    localStorage.removeItem('authToken');
    setUser(null);
    setIsLoggedIn(false);
    navigate('/auth/login');
  }
  window.logout = logout;

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setUser,
        isEnd,
        setIsEnd,
        login,
        signup,
        refreshUser,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
