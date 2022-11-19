import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

interface props {
  children: JSX.Element
}

const PrivateRoute = ({ children }: props) => {
  const location = useLocation();
  const userInfo = JSON.parse(localStorage.getItem('userInfo') as string);
  console.log(userInfo);

  return userInfo ? children : <Navigate to='/login' state={{ from: location }} />;
};

export default PrivateRoute;
