import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/about">
              <Typography>about</Typography>
              <Link to="/">go to root</Link>
            </Route>
            <Route path="/users">
              <Typography>users</Typography>
              <Link to="/">go to root</Link>
            </Route>
            <Route path="/">
              <Typography>root</Typography>
              <Link to="about">go to about</Link>
              <Link to="users">go to users</Link>
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
