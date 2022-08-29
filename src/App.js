import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import ContextTheme from './context/ContextTheme';
import AlertMessage from './components/AlertMessage';


function App() {
  const [theme, setTheme] = useState('bg-secondary');
  const [alert, setAlert] = useState([]);
  const value = {theme, setTheme, alert, setAlert};

  return (
    <ContextTheme.Provider value={value}>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Container>
            <Products/>
            <AlertMessage/>
          </Container>
        </header>
      </div>
    </ContextTheme.Provider>
  );
}

export default App;
