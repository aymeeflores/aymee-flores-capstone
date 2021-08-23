import React from "react";
import "./Navbar.scss";
// import { Bell, Envelope, PersonCircle, Search } from "react-bootstrap-icons";
import Avatar from "../../assets/avatar.jpg";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Resident Social
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarColor01"
              aria-controls="navbarColor01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/events" className="nav-link">
                    Events
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/members" className="nav-link active">
                    Members
                  </Link>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className=" btn btn-primary btn-sm"
              type="button"
              onClick={this.props.dologoutfnc}
            >
              Log Out
            </button>

            <div className="navbar__avatar">
              <img src={Avatar} alt="profile icon" />
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
