import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class PrivateRoute extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Route
                path={this.props.path}
                render={this.props.render}>
            </Route>
        )
    }
}
export default PrivateRoute;
