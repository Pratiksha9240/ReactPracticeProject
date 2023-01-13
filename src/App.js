import logo from './logo.svg';
import './App.css';
import User from './components/User'
import UserDetails from './components/UI/UserDetails'
import { useState } from 'react';

function App() {

  const [user,setUser] = useState('');

  const addUserHandler = (users) => {
    setUser(users);
  }

  return (
    <div className="App">
      <User onAddUser = {addUserHandler}/>
      <UserDetails userList = {user}/>
    </div>
  );
}

export default App;
