import React, { Component } from "react";
import "./footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="mt-3 footer text-center">
            <p>Seyed Siavash Ghanbari | sia.qnbr@gmail.com | +989120229077</p>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
