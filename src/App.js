import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ProtectedRoute } from './auth/protected.route';
import Dashboard from './views/Dashboard/Dashboard';
import './App.css';
import './styling/colors.css';
import Login from './views/Login/Login';
import Browse from './views/Browse/Browse';

import { THEMES } from './styling/Themes';
import { ThemeContext } from './Contexts/ThemeContext';
import Settings from './views/Settings/Settings';
function App() {
  const [theme, setTheme] = useState('light');
  return (

    <div className="App" style={THEMES[theme]}>

      <Router>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <Switch >
            <ProtectedRoute exact path="/dashboard" component={Dashboard}/>
            <ProtectedRoute exact path="/settings" component={Settings} />
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/public">
              <Browse />
            </Route>
          </Switch>
        </ThemeContext.Provider>
      </Router>
    </div>

  );
}

export default App;