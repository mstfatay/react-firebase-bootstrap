import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router'
import { useAuth } from '../../contexs/AuthContex';

export default function AuthRoute({children, ...other}) {
  const {currentUser} = useAuth();

  return (
    <Route 
      {...other} 
      render={()=>currentUser? <Redirect to="/" />: children}
    />
  )
}
