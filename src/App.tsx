import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact> 
            <Home/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
