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

import {THEMES} from './styling/Themes';
import { ThemeContext } from './Contexts/ThemeContext';
function App() {
  const [theme, setTheme ]= useState('light');
  return (
    <ThemeContext.Provider value = {theme, setTheme}>
    <div className="App" style= {THEMES[theme]}>
      
      <Router>
      <Switch >
                <ProtectedRoute exact path="/dashboard" Component={Dashboard} />
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/public">
                    <Browse />
                </Route>
            </Switch>
      </Router>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;