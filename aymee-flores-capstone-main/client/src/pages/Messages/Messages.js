import React, { Component } from "react";

export default class Messages extends Component {
  render() {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Inbox
            <span class="badge bg-primary rounded-pill">14</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Archived
            <span class="badge bg-primary rounded-pill">2</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Important
            <span class="badge bg-primary rounded-pill">1</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            sent
            <span class="badge bg-primary rounded-pill">1</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Drafts
            <span class="badge bg-primary rounded-pill">1</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Deleted
            <span class="badge bg-primary rounded-pill">1</span>
          </li>
        </ul>
      </div>
    );
  }
}
