import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import PrivateRoutes from '../routes/PrivateRoute';

class JobList extends Component {
    render() {
        return (
            <div>
                Job List
            </div>
        )
    }
}
export default JobList;
