import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = (props) => {
    const handleClick = () => {
        props.onLogin(true) 
        props.displayNote(true)
    }
    return (
        <div className="auth">
            <h1> Sign In </h1>
            <TextField id="standard-basic" label="Email" variant="standard" type='email'/><br/>
            <TextField id="standard-basic" label="Password" variant="standard" type='password'/><br/><br/>
            <p>New user? <span onClick={() => props.onRegister(true)}>signup</span></p><br/>
            <Button variant="contained" onClick={handleClick}>Sign in</Button>  
        </div>
    )
}

export default Login;