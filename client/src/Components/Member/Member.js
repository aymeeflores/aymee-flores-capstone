import React from "react";
import axios from "axios";
import Constants from "../../constants";
import "./Member.scss";
import Modal from "./MemberModal";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      user: null,
      modalShow: false,
    };

    this.setModalShow = this.setModalShow.bind(this);
    this.showUser = this.showUser.bind(this);
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

  setModalShow(status) {
    this.setState({
      modalShow: status,
    });
  }

  showUser(user) {
    this.setState({
      user: user,
      modalShow: true,
    });
  }

  render() {
    return (
      <div className="cardContainer">
        {this.state.users.length > 0 &&
          this.state.users.map((item, idx) => {
            return (
              <div className="membercard card bg-light mb-3" key={idx}>
                <div className="membercard__header" key={idx}>
                  <img
                    className="membercard__avatar"
                    src={`${Constants.API_URL}/${item.avatar}`}
                    alt={item.name}
                    width="100"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="card-text">{item.likes}</p>
                  <button
                    variant="primary"
                    onClick={() => this.showUser(item)}
                    className="btn-primary btn-sm"
                  >
                    View Profile
                  </button>
                </div>

                {/* {item.email}
                  {item.available_in}
                  {item.available_out} */}
              </div>
            );
          })}
        <Modal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
          user={this.state.user}
        />
      </div>
    );
  }
}

export default Member;
