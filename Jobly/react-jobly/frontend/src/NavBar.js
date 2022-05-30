import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import CurrentUserContext from './users/CurrentUserContext';
import {
    Navbar,
} from 'reactstrap';

/** Top navigation bar for site. */

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = CurrentUserContext;

    render() {
        const currentUser = this.context;
        let userLinks = null;
        if (currentUser) {
            userLinks = (
                <div>
                    <NavLink exact to="/logout">
                        Log out
                    </NavLink>
                </div>
            )
        } else {
            userLinks = (
                <div>
                    <NavLink exact to="/login">
                        Log in
                    </NavLink>
                    <NavLink exact to="/signup">
                        Sign up
                    </NavLink>
                </div>
            )
        }

        return (
            <div>
                <h5>{currentUser}</h5>
                <Navbar expand="md">
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
                    </div>
                    {userLinks}
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
