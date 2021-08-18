import React from "react";
import "./Navbar.scss";
import { Bell, Envelope, PersonCircle, Search } from "react-bootstrap-icons";
import Avatar from "../../assets/avatar.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar__left">
            <span className="navbar__logo">Resident Social</span>
          </div>
          <div className="navbar__center">
            <div className="navbar__searchbar">
              <div className="navbar__searchbar--searchIcon"></div>
              <Search />
              <input
                placeholder="Search for friend, post or video"
                className="navbar__searchbar--searchInput"
              />
            </div>
          </div>
          <div className="navbar__right">
            <div className="navbar__links">
              <span className="navbar__link">Home</span>
              <span className="navbar__link">Wall</span>
            </div>
            <div className="navbar__icons">
              <div className="navbar__icons--item">
                <PersonCircle />
                <span className="navbar__iconbadge">1</span>
              </div>
              <div className="navbar__icons--item">
                <Bell />
                <span className="navbar__iconbadge">1</span>
              </div>
              <div className="navbar__icons--item">
                <Envelope />
                <span className="navbar__iconbadge">1</span>
              </div>
              <div className="navbar__avatar">
                <img src={Avatar} alt="profile badge" />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
{
  /* <nav className="navbar">
<button className="navbar__button">Home</button>
<button className="navbar__button">Community</button>
<div className="dropdown">
  <a className="dropdown__item" href="#">
    Members
  </a>
  <a className="dropdown__item" href="#">
    Groups
  </a>
</div>
<button>Membership</button>
<div>
  <a href="#">Account</a>
  <a href="#">Profile</a>
  <a href="#">Settings</a>
</div>
<button>Neigborhood</button>
<div>
  <a href="#">Calendar</a>
  <a href="#">Events</a>
  <a href="#">Map</a>
</div> */
}
