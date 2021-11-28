import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Routes from './Routes';
import { AuthProvider } from './contexs/AuthContex';
import { BrowserRouter as Router } from 'react-router-dom';


const theme = createTheme({
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes/>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
