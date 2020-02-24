import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <h3 className="text-white">FreightHub Frontend Coding Challenge</h3>
        <Link to="/list">
          <a className="btn btn-sm btn-success" href="/list">
            Go to Shipments List
          </a>
        </Link>
      </div>
    );
  }
}

export default Home;
