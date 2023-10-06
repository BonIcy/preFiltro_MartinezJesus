import React from 'react';
import Get from './components/Get';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Post from './components/Post'; 
import './App.css';
import Update from './components/Update';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <div className="main">
    
        <div>
          <Route exact path="/post" component={Post}></Route> 
        </div>
        <div>
          <Route exact path="/update" component={Update}></Route>
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path="/" component={Get}></Route>
        </div>
       
      </div>
    </Router>
  );
}

export default App;
