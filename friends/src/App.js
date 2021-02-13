import { useState } from 'react';
import { Link, Route, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';


const App = () => {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);
  
  const loginHandler = (status) => {
    setLoggedIn(status);
  }

  const logout = (e) => {
    e.preventDefault();
    // axiosWithAuth().post('/logout')
    //   .catch(err => console.log(err));
    localStorage.removeItem('token');
    setLoggedIn(false)
    history.push('/login')
  }
  
  return (
    <div className="App">
      <h1>My Friends</h1>
      {localStorage.token ? <Button color='danger' onClick={logout}>Logout</Button> : <Link to='/login'><Button color='danger' >Login</Button></Link>}
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute path="/friendslist" component={FriendsList} />
      <PrivateRoute path="/addfriend" component={AddFriend} />
    </div>
  );
}

export default App;
