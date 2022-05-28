import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Login from './users/Login';
import SignUp from './users/SignUp';
import Routes from './routes/Routes';
import CompanyList from './company/CompanyList';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Routes />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
