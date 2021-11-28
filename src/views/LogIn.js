import { Button, Divider, Input, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexs/AuthContex';
import AuthenticationLayout from '../layouts/AuthenticationLayout'

export default function LogIn(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();
  const {currentUser, login} = useAuth();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(){
    try{
      await login(emailRef.current?.value, passwordRef.current?.value);
    }
    catch{
      setErrorMessage("Failed to login");
      return;
    }
    setErrorMessage("");
    history.push("/");
  }

  return (
    <AuthenticationLayout>
      <Typography variant="h4" color="primary" style={{marginBottom:20}} align="center">
        LOGIN
      </Typography>

      {errorMessage && (<Alert severity="error" style={{marginBottom:15}}>{errorMessage}</Alert> )}
      
      <form action="javascript:void(0);">
        <Typography>Email</Typography>
        <TextField 
          variant="outlined" 
          color="primary" 
          size="small"
          inputRef={emailRef}
          style={{marginBottom:15}}
          fullWidth
        />

        <Typography>Password</Typography>
        <TextField 
          type="password"
          variant="outlined" 
          color="primary" 
          size="small"
          inputRef={passwordRef}
          style={{marginBottom:30}}
          fullWidth
        />
      
        <Button 
          onClick={handleLogin} 
          variant="contained" 
          color="primary" 
          fullWidth
          type="submit"
        >Login</Button>
      </form>

    <Divider style={{margin:30}}/>

    <Typography align="center">Need an account? <Link to="/signup">click here</Link></Typography>
    <Typography align="center">forgot your password? <Link to="/forgot-password">click here</Link></Typography>

    </AuthenticationLayout>
  )
}
