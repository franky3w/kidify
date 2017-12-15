import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import KidAddPage from '../kids/components/KidAddPage';
import KidsDashboardPage from '../kids/components/KidsDashboardPage';
import KidEditPage from '../kids/components/KidEditPage';
import KidTestPage from '../kids/components/KidTestPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={KidsDashboardPage} />
        <PrivateRoute path="/expenses" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <PrivateRoute path="/kidCreate" component={KidAddPage} />
        <PrivateRoute path="/kidTest" component={KidTestPage} />
        <PrivateRoute path="/kidEdit/:id" component={KidEditPage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
