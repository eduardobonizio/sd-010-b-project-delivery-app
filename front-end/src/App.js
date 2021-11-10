import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import rockGlass from './images/rockGlass.svg';
=======
// import rockGlass from './images/rockGlass.svg';
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <span className="logo">TRYBE</span>
      {/* <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
<<<<<<< HEAD
      </object>
=======
      </object> */}
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
      <Redirect to="/login" />
      <Switch>
        <Route exact path="/login" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
