import React from "react";
import "./Sidebar.scss";
import { Rss, People, CalendarEvent, CameraVideo } from "react-bootstrap-icons";
import Avatar from "../../assets/avatar.jpg";

function Sidebar(props) {
  return (
    <>
      <div class="card border-primary mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Primary card title</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>

      <div class="card border-secondary mb-3">
        <div class="card-header">Friend profile</div>
        <div class="card-body">
          <h4 class="card-title">Secondary card title</h4>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
