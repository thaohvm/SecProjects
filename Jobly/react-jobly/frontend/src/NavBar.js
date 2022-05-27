import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

/** Top navigation bar for site. */

class NavBar extends Component {
    render() {
      return (
        <div>
          <Navbar expand="md">
            <NavLink exact to="/" className="navbar-brand">
              Homepage
            </NavLink>

          </Navbar>
        </div>
      );
    }
  }

  export default NavBar;
