import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'

export default function FourOwlFour() {
  return (
    <DashboardLayout>
      <Typography variant="h1" color="primary" align="center">404</Typography>
      <Typography varian="h3" align="center" style={{marginBottom:30}}>Can't find the page</Typography>
      <Link to="/">
        <Typography align="center">Return</Typography>
      </Link>
    </DashboardLayout>
  )
}
