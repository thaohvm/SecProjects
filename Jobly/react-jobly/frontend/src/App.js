import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Login from './users/LoginForm';
import SignUp from './users/SignUpForm';
import Routes from './routes/Routes';
import CompanyList from './company/CompanyList';
import JoblyApi from './api';
import { decode } from "jsonwebtoken";
import CurrentUserContext from './users/CurrentUserContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async componentDidMount() {
    let currentUser = await this.getCurrentUser();
    console.log(currentUser);
    if (currentUser !== undefined) {
      this.setState({ currentUser: currentUser.username });
    }
  }

  async getCurrentUser() {
    let token = localStorage.getItem("token");
    console.log(token)
    try {
      let { username } = decode(token);
      let currentUser = await JoblyApi.getUser(username);
      this.setState({ currentUser: currentUser.username });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser}>
        <div className='App'>
          <BrowserRouter>
            <NavBar />
            <main>
              <Switch>
                <Routes render={props => <Route {...props} />} />
              </Switch>
            </main>
          </BrowserRouter>
        </div>
      </CurrentUserContext.Provider>
    )
  }
}

export default App;
