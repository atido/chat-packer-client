import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { TripsProviderWrapper } from '../context/trips.context';

const AuthentLayout = ({ children }) => {
  return (
    <TripsProviderWrapper>
      <NavBar />
      <Outlet />
    </TripsProviderWrapper>
  );
};

export default AuthentLayout;
