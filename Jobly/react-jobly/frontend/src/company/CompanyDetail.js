import React, { Component } from 'react';
import JoblyApi from '../api';
import JobCard from '../job/JobCard';
import CurrentUserContext from '../users/CurrentUserContext';

class CompanyDetail extends Component {
    static contextType = CurrentUserContext;

    constructor(props) {
        super(props);
        this.state = {
            company: { jobs: [] },
            appliedJobs: [],
            currentUser: null
        }
        this.applyJob = this.applyJob.bind(this);
    }

    async componentDidMount() {
        let { currentUser, appliedJobs } = this.context;
        let company = await JoblyApi.getCompany(this.props.match.params.handle);
        console.log(company)
        let jobs = [...this.state.company.jobs];
        this.setState({ company, appliedJobs, currentUser });
    }

    async applyJob(jobId) {
        let { currentUser } = this.state;
        let application = await JoblyApi.applyToJob(currentUser, jobId);
        this.setState((st) => ({
            jobs: st.jobs.map((job) =>
                job.id === jobId ? { ...job, status: application } : job
            ),
        }));
    }

    render() {
        let { company, appliedJobs } = this.state;
        return (
            <div>
                <h2>{company.name}</h2>
                <p>{company.description}</p>
                {company.jobs.map(job =>
                    <ol><JobCard
                        id={job.id}
                        companyName={job.companyName}
                        title={job.title}
                        salary={job.salary}
                        equity={job.equity}
                        status={job.status}
                        applyJob={this.applyJob}
                        applied={appliedJobs.indexOf(job.id) > -1 ? true : false}
                    />
                    </ol>)}
            </div>
        );
    }
}
export default CompanyDetail;
