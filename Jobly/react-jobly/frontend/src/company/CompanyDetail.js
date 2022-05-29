import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: { jobs: [] }
        }
    }

    render() {
        return (
            <div>
                {this.state.company.jobs}
            </div>
        );
    }
}
export default CompanyDetail;
