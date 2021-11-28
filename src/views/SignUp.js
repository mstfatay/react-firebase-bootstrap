import { Button, Divider, TextField, Typography } from '@material-ui/core'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexs/AuthContex';
import AuthenticationLayout from '../layouts/AuthenticationLayout'
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';

export default function SignUp() {
  const {currentUser, signUp} = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  console.log(currentUser);

  async function handleSignUp(){
    try{
      setLoading(true);
      await signUp(emailRef.current?.value, passwordRef.current?.value);
    }
    catch(e){
      setErrorMessage("can't create the account");
      setLoading(false);
      return;
    }
    setLoading(false);
    history.push('/');
  }


  return (
    <AuthenticationLayout>
      <Typography color="primary" variant="h4" align="center" style={{marginBottom:20}}>
        SIGN UP
      </Typography>

      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      
      <form action="javascript:void(0);">
        <Typography>Email</Typography>
        <TextField 
          variant="outlined" 
          size="small" fullWidth 
          style={{marginBottom:15}}
          inputRef={emailRef}
        />

        <Typography>Password</Typography>
        <TextField 
          type="password"
          variant="outlined" 
          size="small" fullWidth 
          style={{marginBottom:30}}
          inputRef={passwordRef}

        />

        <Button 
          type="submit"
          onClick={handleSignUp} 
          disabled={loading} 
          variant="contained" 
          color="primary" 
          fullWidth 
          style={{marginBottom:20}}
        >Sign Up</Button>
      </form>

      <Divider style={{margin:20}}/>
      <Typography align="center">
        {"If you have an account "}
        <Link to="/login">Click here</Link>
      </Typography>
    </AuthenticationLayout>
  )
}
