import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2C3639';
      document.title = 'TextUtils - Dark mode'
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light mode'
      showAlert("Light mode has been enabled", "success");
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="AboutTextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className={`container  text-${mode === 'light' ? 'dark' : 'light'}`}>
          <Switch>

            <Route exact path="/about" >
              <About />
            </Route>

            <Route exact path="/" >
              <Textform heading="Enter text to Transform" mode={mode} showAlert={showAlert} />
            </Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
