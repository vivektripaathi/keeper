import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Register = (props) => {
    const handleClick = () => {
        props.onLogin(true) 
        props.displayNote(true)
    }
    return (
        <div className="auth">
            <h1> Sign Up </h1>
            <TextField id="standard-basic" label="Email" variant="standard" type='email'/><br/>
            <TextField id="standard-basic" label="Password" variant="standard" type='password'/><br/><br/>
            <TextField id="standard-basic" label="Confirm Password" variant="standard" type='password'/><br/><br/>
            <p>Already user? <span onClick={() => props.onLogin(true)}>signin</span></p><br/>
            <Button variant="contained" onClick={handleClick}>Sign up</Button>  
        </div>
    )
}

export default Register;