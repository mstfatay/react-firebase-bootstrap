import { Button, Divider, Input, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab';
import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexs/AuthContex';
import AuthenticationLayout from '../layouts/AuthenticationLayout'

export default function LogIn(props) {
  const emailRef = useRef();
  const history = useHistory();
  const {currentUser, resetPassword} = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  async function handleResetPassword(){
    setErrorMessage("");
    setMessage("");
    try{
      await resetPassword(emailRef.current?.value);
    }
    catch{
      setErrorMessage("Failed to sending email.");
      return;
    }
    setErrorMessage("");
    setMessage("Email is sent.")
  }

  return (
    <AuthenticationLayout>
      <Typography variant="h4" color="primary" style={{marginBottom:20}} align="center">
        RESET PASSWORD
      </Typography>

      {errorMessage && (<Alert severity="error" style={{marginBottom:15}}>{errorMessage}</Alert> )}
      {message && (<Alert severity="success" style={{marginBottom:15}}>{message}</Alert> )}
      
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
      
        <Button 
          onClick={handleResetPassword} 
          variant="contained" 
          color="primary" 
          fullWidth
          type="submit"
        >Send Email</Button>
      </form>

    <Divider style={{margin:30}}/>

    <Typography align="center"><Link to="/login">Click here</Link> to login</Typography>

    </AuthenticationLayout>
  )
}
