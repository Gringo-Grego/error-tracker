import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { ProtectedRoute } from './auth/protected.route';
import Dashboard from './views/Dashboard/Dashboard';
import './App.scss';
import Login from './views/Login/Login';
import Browse from './views/Browse/Browse';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Switch >
                <ProtectedRoute exact path="/dashboard" component={Dashboard} />
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/public">
                    <Browse />
                </Route>
            </Switch>
      </Router>
    </div>
  );
}

export default App;