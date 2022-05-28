import React, { Component } from 'react';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import PrivateRoutes from '../routes/PrivateRoute';
import CompanyCard from './CompanyCard';
import JoblyApi from "../api";

class CompanyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: []
        }
    }

    async componentDidMount() {
        let companies = await JoblyApi.getCompanies();
        console.log(companies);
        this.setState({ companies });
    }

    render() {
        let { companies } = this.state;
        return (
            <div>
                <h1> List of companies</h1>

                {companies.map(company => (
                    <CompanyCard
                        key={company.handle}
                        handle={company.handle}
                        name={company.name}
                        description={company.description}
                    />
                ))}
            </div>
        )
    }
}
export default CompanyList;
