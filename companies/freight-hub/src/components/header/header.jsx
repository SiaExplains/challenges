import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header>
          <nav className="navbar navbar-light bg-light">
            <Link to="/">
              <span className="navbar-brand">
                <img
                  src={logo}
                  className="d-inline-block align-top"
                  alt="FreightHub Logo"
                />
                &nbsp;
              </span>
            </Link>
            <ul>
              <Link to="/detail">
                <li className="btn btn-sm btn-light">New Shipment</li>
              </Link>
              &nbsp;
              <Link to="/list">
                <li className="btn btn-sm btn-light">Shipments</li>
              </Link>
              &nbsp;
              <Link to="/">
                <li className="btn btn-sm btn-light">Home</li>
              </Link>
              &nbsp;
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
