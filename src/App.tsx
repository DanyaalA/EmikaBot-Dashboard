import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { DashboardPage } from './pages/Dashboard';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div>
      <Sidebar />
      <Switch>
        <Redirect path="/" exact={true} to="/dashboard" />
        <Route path="/dashboard" exact={true} component={DashboardPage} />

      </Switch>
    </div>
  );
}

export default App;
