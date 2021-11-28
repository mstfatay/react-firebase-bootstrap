import React from 'react'
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme)=>({
  container: {
    borderRadius: '10px',
    borderLeft: `solid 1px ${theme.palette.primary.main}`,
    borderRight: `solid 1px ${theme.palette.primary.main}`,
    padding: '30px',
  }
}));


export default function AuthenticationLayout(props) {
  const classes = useStyle();

  return (
    <Grid container direction="column" justifyContent="center" style={{minHeight: "100vh"}}>
      <Container maxWidth="xs" className={classes.container}>
        {props.children}
      </Container>
    </Grid>
  )
}
