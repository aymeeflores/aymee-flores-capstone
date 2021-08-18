import React from "react";
import { Personicon } from "../../assets/person-circle.svg";
import { Bell } from "../../assets/bell.svg";
import { Envelope } from "../../assets/envelope.svg";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar__left">
            <span className="Logo">Resident Social</span>
          </div>
          <div className="navbar__center">
            <div className="navbar__searchbar">
              <Search className="navbar__searchbar--searchIcon" />
              <input
                placeholder="Search for friend, post or video"
                className="navbar__searchbar--searchInput"
              />
            </div>
          </div>
          <div className="navbar__right">
            <div className="navbar__links">
              <span className="navbar__link">Homepage</span>
              <span className="navbar__link">Wall</span>
            </div>
            <div className="navbar__icons">
              <div className="navbar__icons--item">
                <img src={Personicon} alt="profile icon" />
                <img src={Bell} alt="notification icon" />
                <img src={Envelope} alt="Message icon" />
              </div>
              <div>
                <img src="#" alt="profile badge" />
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
