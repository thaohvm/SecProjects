import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import CompanyList from '../company/CompanyList';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/"
                        render={() => <Home />}
                    />
                    <Route exact path="/companies"
                        render={() => <CompanyList />}
                    />
                </Switch>
            </div>
        )
    }
}
export default Routes;
