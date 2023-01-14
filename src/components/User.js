import "./User.css";
import React, { useState } from "react";
import AgeError from "./ErrorComponents/AgeError";
import NameError from "./ErrorComponents/NameError";

const User = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isNameError, setIsNameError] = useState(true);
  const [isAgeError, setIsAgeError] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0) {
      setIsNameError(false);
      return;
    } else if (enteredAge <= 0) {
      setIsAgeError(false);
      return;
    } else {
      setIsNameError(true);
      setIsAgeError(true);
    }

    const user = {
      age: +enteredAge,
      name: enteredName
    };

    // console.log(user);
    props.onAddUser(user);
    setEnteredName("");
    setEnteredAge("");
  };

  const onNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const onAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div className="user">
      <form onSubmit={onSubmitHandler}>
        <label className="user-label" htmlFor="text">
          Name :{" "}
        </label>
        <input
          className="user-input"
          type="text"
          name="name"
          id="name"
          value={enteredName}
          onChange={onNameChangeHandler}
        />
        <br />
        <label className="user-label" htmlFor="age">
          Age :{" "}
        </label>
        <input
          className="user-input"
          type="number"
          name="age"
          id="age"
          value={enteredAge}
          onChange={onAgeChangeHandler}
        />
        <br />
        <button className="user-button" type="submit">
          Add User
        </button>
      </form>

      <AgeError style={{ display: isAgeError ? "none" : "block" }} />
      <NameError style={{ display: isNameError ? "none" : "block" }} />
    </div>
  );
};

export default User;
