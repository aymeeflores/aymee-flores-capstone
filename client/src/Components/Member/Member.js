import React, { useState } from "react";
import axios from "axios";
import Constants from "../../constants";
import "./Member.scss";
import Modal from "./MemberModal";

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.modalShow = this.modalShow.bind(this);
    this.modalHide = this.modalHide.bind(this);
  }
  modalShow = () => {
    this.setState({ show: true });
  };

  modalHide = () => {
    this.setState({ show: false });
  };
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
      <div className="cardContainer">
        {this.state.users.length > 0 &&
          this.state.users.map((item, idx) => {
            return (
              <div className="membercard card bg-light mb-3">
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
                    onClick={this.modalShow}
                    className="btn-primary btn-sm"
                  >
                    <Modal
                      show={this.state.modalShow}
                      handleClose={this.modalHide}
                    />
                    View Profile
                  </button>
                </div>

                {/* {item.email}
                  {item.available_in}
                  {item.available_out} */}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Member;
