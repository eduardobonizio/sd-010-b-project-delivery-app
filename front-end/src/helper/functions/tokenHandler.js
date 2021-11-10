import React from 'react';
import { Navigate } from 'react-router-dom';
import checkPath from './checkPath';

const tokenHandler = (token, location) => {
  const verifyPath = checkPath(location);
  console.log(location, 'location ', verifyPath);

  // if (!verifyPath && !token) return location.push('/');
  if (!verifyPath) return <Navigate to="/" />;
};

export default tokenHandler;
