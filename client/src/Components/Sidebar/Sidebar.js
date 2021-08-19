import React from "react";
import "./Sidebar.scss";
import { Rss, People, CalendarEvent, CameraVideo } from "react-bootstrap-icons";
import Avatar from "../../assets/avatar.jpg";

function Sidebar(props) {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__wrapper">
          <ul className="sidebar__list">
            <li className="sidebar__listitem">
              <Rss className="sidebar__listitem--icon" />
              <span className="sidebar__listitem--text">feed</span>
            </li>
            <li className="sidebar__listitem">
              <People className="sidebar__listitem--icon" />
              <span className="sidebar__listitem--text">Groups</span>
            </li>
            <li className="sidebar__listitem">
              <CalendarEvent className="sidebar__listitem--icon" />
              <span className="sidebar__listitem--text">Events</span>
            </li>
            <li className="sidebar__listitem">
              <CameraVideo className="sidebar__listitem--icon" />
              <span className="sidebar__listitem--text">Videos</span>
            </li>
            <li className="sidebar__listitem">
              <Rss className="sidebar__listitem--icon" />
              <span className="sidebar__listitem--text">Questions</span>
            </li>
          </ul>
          <hr className="sidebar__memberlist" />
          {/* <ul className="sidebar__memberitem">
            {this.state.data.forEach((member) => {
              return (
                <li className="sidebar__friend">
                  <img className="sidebar__img" src={member.avatar} alt="" />
                  <span className="sidebarFriendName">{member.name}</span>
                </li>
              );
            })}
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
