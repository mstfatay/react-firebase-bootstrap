import { Container, Grid } from '@material-ui/core'
import React from 'react'

export default function DashboardLayout(props) {
  return (
    <Grid container direction="column" justifyContent="center" style={{minHeight: "100vh"}}>
      <Container maxWidth="md">
        {props.children}
      </Container>
    </Grid>
  )
}
