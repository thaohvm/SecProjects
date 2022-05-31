import React, { Component } from 'react';

// { jobs: [ { id, title, salary, equity, companyHandle, companyName }, ...] }

class JobCard extends Component {

    render() {
        let { title, salary, equity, companyName } = this.props;

        return (
            <div>
                <div className="JobCard my-3">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{companyName}</p>
                            <p className="card-text">Salary: {salary}</p>
                            <p className="card-text">Equity: {equity}</p>
                        </div>

                </div>
            </div>
        );
    }
}
export default JobCard;
