import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

// import PropTypes from 'prop-types';

function Home(props) {
  useEffect(() => {
    console.log('aqui é o home', props);
    // props.location.pathname('/login');
  });
  // const match = useRouteMatch('/login');

  return (
    // <h3>Redirecting...</h3>
    <Redirect
      to="/login"
      // render={ { match } }
    />
  );
}

// Home.propTypes = {
//   history: PropTypes.objectOf(PropTypes.objectOf).isRequired,
// };

export default Home;
