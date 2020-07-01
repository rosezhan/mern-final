//similar to home
import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div className="custom-form">
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <div>
              <p className="slogan">Meet A Better You By Setting Up Your</p>
              <p className="slogan">Sports Plan Today</p>
            </div>
            <div style={{margin:"2vw auto"}} className="container-login100-form-btn">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="login100-form-btn"
              >
                Register
              </Link>
            </div>
            <div style={{margin:"2vw auto"}} className="container-login100-form-btn">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="login100-form-btn"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
export default Landing;