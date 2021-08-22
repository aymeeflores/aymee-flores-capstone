import React from "react";
import axios from "axios";
import Constants from "../../constants";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 12,
        firstName: "John",
        lastName: "Doe",
      },
      users: [],
    };
  }

  fetchMembers() {
    axios
      .get(`${Constants.API_URL}/location/users`, {
        headers: {
          Authorization: `Bearer ${window.apitoken}`,
        },
      })
      .then((response) => {
        this.setState({
          users: response.data,
        });
      })
      .catch((e) => {});
  }

  componentDidMount() {
    this.fetchMembers();
  }

  render() {
    return (
      <div>
        {this.state.users.length > 0 &&
          this.state.users.map((item, idx) => {
            return (
              <div key={idx}>
                <img
                  src={`${Constants.API_URL}/${item.avatar}`}
                  alt={item.name}
                  width="100"
                />
                {item.name}
                {item.email}
                {item.available_in}
                {item.available_out}
                {item.likes}
              </div>
            );
          })}
        {/* <Account user={this.state.user} /> */}
      </div>
    );
  }
}

const Account = (props) => {
  const { user } = props; // same as -> const user = props.user;
  return (
    <div>
      <div className="card mb-3">
        <h3 className="card-header">
          {user.firstName} {user.lastName}
        </h3>
        <div className="card-body">
          <h5 className="card-title">quote</h5>
          <h6 className="card-subtitle text-muted">Support card subtitle</h6>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="d-block user-select-none"
          width="100%"
          height="200"
          aria-label="Placeholder: Image cap"
          focusable="false"
          role="img"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 318 180"
        >
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            Image cap
          </text>
        </svg>
        <div className="card-body">
          <p className="card-text">Interests</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <button className="card-link">Card link</button>
          <button className="card-link">Another link</button>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
      <span>
        Name - {user.firstName} {user.lastName}
      </span>
      <span>ID - {user.id}</span>
    </div>
  );
};

export default Member;
