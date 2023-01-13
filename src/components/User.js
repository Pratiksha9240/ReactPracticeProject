import './User.css';
import React, { useState } from 'react';
import AgeError from './ErrorComponents/AgeError';
import NameError from './ErrorComponents/NameError';

const User = (props) => {

    const [enteredName,setEnteredName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [isValid,setIsValid] = useState(false);
    const [isNameError,setIsNameError] = useState(true);
    const [isAgeError,setIsAgeError] = useState(true);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(enteredName.trim().length === 0){
            setIsNameError(false);
            return;
        }
        else if(enteredAge <= 0){
            setIsAgeError(false);
            return;
        }
        else{
            setIsNameError(true);
            setIsAgeError(true);
        }
        props.onAddUser();

    }


    const onNameChangeHandler = (event) => {
        if(event.target.value.trim().length === 0){
            setIsValid(false);
        }
        else{
            setIsValid(true);
        }
        setEnteredName(event.target.value);
    }

    const onAgeChangeHandler = (event) => {
        if(event.target.value.trim().length <= 0){
            setIsValid(false);
        }
        else{
            setIsValid(true);
        }
        setEnteredAge(event.target.value);
    }

    return (
        <div className='user'>
            <form onSubmit = {onSubmitHandler}>
                <label className='user-label' htmlFor="text">Name : </label>
                <input className='user-input' type="text" name="name" id="name" onChange = {onNameChangeHandler}/>
                <br />
                <label className='user-label' htmlFor="age">Age : </label>
                <input className='user-input' type="number" name="age" id="age" onChange = {onAgeChangeHandler}/>
                <br />
                <button className='user-button' type='submit'>Add User</button>
            </form>

            <AgeError style = {{display: isAgeError ? 'none' : 'block'}}/>
            <NameError style = {{display: isNameError ? 'none' : 'block'}}/>
        </div>
    );
}

export default User;