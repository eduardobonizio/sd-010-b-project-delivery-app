import React from 'react';
import { useNavigate } from 'react-router';

export default function Login() {
  // UseNavigate será o mesmo que history.push()
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div>
      <h1>
        Hello World
      </h1>
    </div>
  );
}
