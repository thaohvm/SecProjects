import React, { Component } from 'react';
import JoblyApi from '../api';
import JobCard from '../job/JobCard';

class CompanyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: { jobs: [] }
        }
    }

    async componentDidMount() {
        let company = await JoblyApi.getCompany(this.props.match.params.handle);
        console.log(company)
        let jobs = [...this.state.company.jobs];
        console.log(jobs)
        this.setState({ company });
    }

    render() {
        let { company } = this.state;
        return (
            <div>
                <h2>{company.name}</h2>
                <p>{company.description}</p>
                {company.jobs.map(job =>
                    <ol><JobCard title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                        companyName={job.companyName}
                    />
                    </ol>)}
            </div>
        );
    }
}
export default CompanyDetail;
