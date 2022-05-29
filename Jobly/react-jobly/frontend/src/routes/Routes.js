import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import CompanyList from '../company/CompanyList';
import Home from '../Home';
import Login from '../users/Login';
import SignUp from '../users/SignUp';
import CompanyDetail from '../company/CompanyDetail';
import JobList from '../job/JobList';

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
                        render={props => <CompanyList {...props} />}
                    />
                    <Route path="/companies/:handle"
                        render={props => <CompanyDetail {...props} />}
                    />
                    <Route path="/jobs"
                        render={props => <JobList {...props} />}
                    />
                </Switch>
            </div>
        )
    }
}
export default Routes;
