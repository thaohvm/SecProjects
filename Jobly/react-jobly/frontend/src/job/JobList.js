import React, { Component } from 'react';

import JoblyApi from '../api';
import JobCard from './JobCard';
import SearchForm from '../common/SearchForm';

// { jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...] }

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs : []
        }
        this.search = this.search.bind(this);
    }

    async componentDidMount() {
        let jobs = await JoblyApi.getJobs();
        this.setState({ jobs });
    }
    async search(query) {
        let jobs = await JoblyApi.getFilterJobs(query);
        this.setState({ jobs });
    }

    render() {
        let { jobs } = this.state;
        return (
            <div className='CompanyList'>
                <SearchForm handleSearch={this.search} />
                <h1> List of jobs</h1>

                {jobs.map(job => (
                    <JobCard
                        key={job.id}
                        companyName={job.companyName}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                    />
                ))}
            </div>
        )
    }
}
export default JobList;
