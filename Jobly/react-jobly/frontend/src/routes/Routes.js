import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import CompanyList from '../company/CompanyList';
import Home from '../Home';
import LoginForm from '../users/LoginForm';
import SignUpForm from '../users/SignUpForm';
import CompanyDetail from '../company/CompanyDetail';
import JobList from '../job/JobList';
import JoblyApi from '../api';

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: JoblyApi.token
        }
        this.login = this.login.bind(this);
        this.signUp = this.signUp.bind(this);
    }

    async login(data, history) {
        try {
            let token = await JoblyApi.login(data);
            this.setState({ token: token });
            history.push("/");
        } catch (err) {
            console.error("login failed", err);
            return { success: false, err }
        }
    }

    async signUp(data, history) {
        try {
            let token = await JoblyApi.signUp(data);
            this.setState({ token: token });
            history.push("/");
        } catch (err) {
            console.error("signUp failed", err);
            return { success: false, err }
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"
                        render={() => <Home />}
                    />
                    <Route exact path="/login"
                        render={props => <LoginForm handleLogin={this.login} {...props}/>}
                    />
                    <Route exact path="/signup"
                        render={props => <SignUpForm handleSignUp={this.signUp} {...props}/>}
                    />
                    <Route exact path="/companies"
                        render={props => <CompanyList {...props} />}
                    />
                    <Route exact path="/companies/:handle"
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
