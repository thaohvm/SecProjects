import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import Routes from './routes/Routes';
import JoblyApi from './api';
import { decode } from "jsonwebtoken";
import CurrentUserContext from './users/CurrentUserContext';
import PrivateRoute from './routes/PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async componentDidMount() {
    let userObj = await this.getCurrentUser();
    console.log(userObj);
    if (userObj.username !== undefined) {
      this.setState({ currentUser: userObj.username });
    }
  }

  async getCurrentUser() {
    let token = localStorage.getItem("token");
    try {
      let { username } = decode(token);
      let currentUser = await JoblyApi.getUser(username);
      return currentUser;
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
