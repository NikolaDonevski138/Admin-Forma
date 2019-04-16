import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm'; //UserForm from ./UserForm
import { editUser, removeUser } from '../actions/users'; //{editUser,removeUser} from ../action/Users

const EditUserPage = (props) => {
  return (
    <div>
      <div className="page-header">
      <div className="content-container">
      <h1 className="page-header__title">Edit User</h1>
      
      </div>

        </div>
    <div className="content-contaioner">  

    <UserForm //UserForm
        user={props.user} //user={props.user}
        onSubmit={(user) => { //user
          props.dispatch(editUser(props.user.id, user)); //editUser(props.user.id,user)
          props.history.push('/');
        }}
      />
      <button className="button--secondary" onClick={() => {
        props.dispatch(removeUser({ id: props.user.id }));//removeUser({id:props.user.id})
        props.history.push('/UserDashboardPage');
      }}>Remove</button>
      </div>
    
  
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === props.match.params.id)//user => user.id === props.match.params.id
  };
};

export default connect(mapStateToProps)(EditUserPage);
