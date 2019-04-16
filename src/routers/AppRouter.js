import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import UserDashboardPage from '../components/UserDashboardPage'; //UserDashboardPage from ../components/UserDashboardPage
import AddUserPage from '../components/AddUserPage'; //AddUserPage from '../components/AddUserPage
import EditUserPage from '../components/EditUserPage';//EditUserPage from '../components/EditUserPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Signin from '../Signin/Signin'
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Signin} exact={true}/>
        <Route path="/UserDashboardPage" component={UserDashboardPage} exact={true} />
        <Route path="/create" component={AddUserPage} />
        <Route path="/edit/:id" component={EditUserPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
