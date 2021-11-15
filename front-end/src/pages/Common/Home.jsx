import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import validateEmail from './functions';
// import * as style from './style';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      Home
    </div>);
}
