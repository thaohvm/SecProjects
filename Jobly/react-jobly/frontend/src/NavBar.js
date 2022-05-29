import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
} from 'reactstrap';

/** Top navigation bar for site. */

class NavBar extends Component {
    render() {
      return (
        <div>
          <Navbar expand="md">
            <NavLink exact to="/" className="navbar-brand">
              Jobly
            </NavLink>
            <NavLink exact to="/login">
              Log in
            </NavLink>
            <NavLink exact to="/signup">
              Sign up
            </NavLink>
            <NavLink exact to="/companies">
              Companies
            </NavLink>
            <NavLink exact to="/jobs">
              Jobs
            </NavLink>
          </Navbar>
        </div>
      );
    }
  }

  export default NavBar;
