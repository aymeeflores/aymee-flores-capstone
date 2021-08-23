import React from "react";
import axios from "axios";
import Constants from "../../constants";

class Events extends React.Component {
  consth;
  ructor(props) {
    this.state = {
      events: [],
    };
  }
  fetchEvents() {
    axios
      .get(`${Constants.API_URL}/location/events`, {
        headers: {
          Authorization: `Bearer ${window.apitoken}`,
        },
      })
      .then((response) => {
        this.setState({
          events: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {});
  }

  componentDidMount() {
    this.fetchEvents();
    console.log(this.fetchEvents);
  }

  render() {
    return (
      <div>
        {/* <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
              <th scope="col">Column heading</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-active">
              <th scope="row">Active</th>
              <td>Column content</td>
              <td>Column content</td>
              <td>Column content</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }
}

export default Events;
