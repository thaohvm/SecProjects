import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import CompanyList from '../company/CompanyList';
import Home from '../Home';
import Login from '../users/Login';
import SignUp from '../users/SignUp';

class Routes extends Component {
    render() {
        return (
            <div>
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
                    <Route path="/companies"
                        render={props => <CompanyList {...props}/>}
                    />

                </Switch>
            </div>
        )
    }
}
export default Routes;
