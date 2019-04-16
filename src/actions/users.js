import uuid from 'uuid';

export const addUser = ( //addUser
    {
      ime = '',
      prezime ='',
      oddel= '',
      note = '',
      amount = 0,
      createdAt = 0,
      email = ''
    } = {}
  ) => ({
    type: 'ADD_USER', //ADD_USER
    user: { //user
      id: uuid(),
      ime,
      prezime,
      oddel,
      note,
      amount,
      createdAt,
      email
    }
  });
 
 export const removeUser = ({ id } = {}) => ({ //removeUser
    type: 'REMOVE_USER', //REMOVE_USER
    id
  });
  
 
  
 export const editUser = (id,updates) => ({ //editUser
      type: 'EDIT_USER', //EDIT_USER
      id,
      updates
  })
