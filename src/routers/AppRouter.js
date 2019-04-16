import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserDashboardPage from '../components/UserDashboardPage'
import AddUserPage from '../components/AddUserPage'
import EditUserPage from '../components/EditUserPage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import Signin from '../Signin/Signin'

function AppRouter() {
  const [auth, setAuth] = useState({ isAuth: false })

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route
            path="/"
            render={props => (
              <Signin {...props} auth={auth} setAuth={setAuth} />
            )}
            exact={true}
          />
          <Route
            path="/UserDashboardPage"
            component={UserDashboardPage}
            exact={true}
          />
          <Route path="/create" component={AddUserPage} />
          <Route path="/edit/:id" component={EditUserPage} />
          <Route path="/help" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
