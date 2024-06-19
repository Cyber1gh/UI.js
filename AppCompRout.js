// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LoginScreen onLogin={handleLogin} />
          </Route>
          <Route path="/home">
            <HomeScreen user={loggedInUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
