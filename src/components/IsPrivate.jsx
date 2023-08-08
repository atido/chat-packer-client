import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import PageLoader from './loader/PageLoader';

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading, refreshUser } = useContext(AuthContext);
  useEffect(() => {
    refreshUser();
  }, []);

  // If the authentication is still loading
  if (isLoading) return <PageLoader />;

  if (!isLoggedIn) {
    console.log('is not logged in > is loading', isLoading);
    // If the user is not logged in
    return <Navigate to="/auth/login" />;
  } else {
    // If the user is logged in, allow to see the page
    return children;
  }
}

export default IsPrivate;
