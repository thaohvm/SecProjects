import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CurrentUserContext from './users/CurrentUserContext';
import {
    Navbar,
} from 'reactstrap';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = CurrentUserContext;

    render() {
        const currentUser = this.context;
        let homeContent = (
            <div>
                <h1>Jobly</h1>
                <p>All the jobs in one, convenient place.</p>

                <Link to="/login">
                    <button className='btn btn-primary'>
                        Log in</button>
                </Link>
                <Link to="/signUp">
                    <button className='btn btn-primary'>
                        Sign up</button>
                </Link>
            </div>
        )

        if (currentUser) {
            homeContent = (
                <div>
                    <h1>Jobly</h1>
                    <p>All the jobs in one, convenient place.</p>
                    <h5>Welcome Back, {currentUser}</h5>
                    {/* <Navbar expand="md">
                        <div>
                            <NavLink exact to="/" className="navbar-brand">
                                Jobly
                            </NavLink>
                            <NavLink exact to="/companies">
                                Companies
                            </NavLink>
                            <NavLink exact to="/jobs">
                                Jobs
                            </NavLink>
                            <NavLink exact to="/jobs">
                                Profile
                            </NavLink>
                            <NavLink exact to="/logout">
                                Log out
                            </NavLink>
                        </div>
                    </Navbar> */}
                </div>
            )
        }

        return (
            <div>
                {homeContent}
            </div>
        );

    }
}

export default Home;
