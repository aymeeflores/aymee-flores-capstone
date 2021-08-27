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
      })
      .catch((e) => {});
  }

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return (
      <div>
        <h1>Event List</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Event Name</th>
              <th scope="col">Event Description</th>
              <th scope="col">Event Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-active">
              <th scope="row">Active</th>
              <td>Book Club</td>
              <td>join Ahri to discuss the book of the month</td>
              <td>Last sunday of every month</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="table-active">
              <th scope="row">Active</th>
              <td>Happy Hour</td>
              <td>join Lux for happy hour at City Place</td>
              <td>Every other Wednesday</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="table-active">
              <th scope="row">Active</th>
              <td>Gym Buddies</td>
              <td>join Sett for a workout</td>
              <td>Every morning at 6:00AM</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="table-active">
              <th scope="row">Active</th>
              <td>Inline Skating</td>
              <td>join Aphelios for an afternoon at the park skating</td>
              <td>Saturday Sept 4 , 2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Events;
