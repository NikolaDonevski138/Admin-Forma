export default (users) => { //users
    return users //users
        .map((user) => user.oddel)
        .reduce((sum, value) => sum + value, 0); 
  };
  