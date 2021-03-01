import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Content/>
    </Router>
    </>
  );
}

export default App;
