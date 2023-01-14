import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import UserDetails from "./components/UI/UserDetails";
import { useState } from "react";

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((preuser) => {
      // console.log("User",user);
      // console.log("Prev Users",preuser);
      return [user, ...preuser];
    });
  };

  return (
    <div className="App">
      <User onAddUser={addUserHandler} />
      <UserDetails userList={users} />
    </div>
  );
}

export default App;
