
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been enabled', 'success');
      // document.title = 'TEXTCase - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      // document.title = 'TEXTCase - Light Mode';
    }

  }
  return (
    <>
      <Router>

        <Navbar title="TEXTCase" mode={mode} enableMode={toggleMode} aboutTitle="About Us" />
        <Alert alert={alert} />

        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze in Text Box" mode={mode} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        {/* <TextForm showAlert={showAlert} heading="Enter Text to Analyze in Text Box" mode={mode} /> */}
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
