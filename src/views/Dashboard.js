import { Button, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../contexs/AuthContex';
import DashboardLayout from '../layouts/DashboardLayout';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogout(){
    try{
      await logout();
    }
    catch(e){
      setErrorMessage("Couldn't log out.")
    }
    history.push("/login");
  }

  return (
    <DashboardLayout>
      <Typography variant="h3" color="primary">Hello!</Typography>
      <Typography variant="h4" color="primary" style={{marginBottom:50}}>{currentUser.email}</Typography>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <Button variant="contained" color="primary" onClick={handleLogout}>Log Out</Button>
      <Link to="/asdf">go to asdf</Link>
    </DashboardLayout>
    
  );
}
