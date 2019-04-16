import React from 'react';
import UserList from './UserList'; //UserList from ./UserList
import UserListFilters from './UserListFilters'; //UserListFilters from './UserListFilters

const UserDashboardPage = () => ( //UserDashboardPage
  <div>
       <div>
     <div className="page-header">
     <div className="content-container">
     <h1 className="page-header__title">Users</h1>
     </div>
     </div>
     
     
      </div>
    <UserListFilters />
    <UserList />
  </div>
);

export default UserDashboardPage; //UserDashboardPage