import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Login from './users/LoginForm';
import SignUp from './users/SignUpForm';
import Routes from './routes/Routes';
import CompanyList from './company/CompanyList';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <main>
            <Switch>
              <Routes render={props => <Route {...props}/>}/>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
