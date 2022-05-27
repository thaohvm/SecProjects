import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Login from './users/Login';
import SignUp from './users/SignUp';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/"
                render={() => <Home />}
              />
              <Route exact path="/login"
                render={() => <Login />}
              />
              <Route exact path="/signup"
                render={() => <SignUp />}
              />
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
