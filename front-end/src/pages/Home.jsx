import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    navigate('/login');
  }, [navigate]);

  return (
    <div className="App">
      { }
    </div>
  );
}

export default Home;
