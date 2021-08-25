import React, { Component } from "react";
import "./Feed.scss";
import Constants from "../../constants";
import CardText from "./CardText";
import CardImage from "./CardImage";
import axios from "axios";
import { Pencil } from "react-bootstrap-icons";

export default class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      comment: [],
    };

    this.createPost = this.createPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  fethcFeed() {
    let headers = {};
    headers["Authorization"] = "Bearer " + window.apitoken;

    axios
      .get(`${Constants.API_URL}/location/feed`, {
        headers: headers,
      })
      .then((response) => {
        let posts = response.data.reverse();
        this.setState({
          posts: posts,
        });
      })
      .catch((e) => {});
  }

  createPost() {
    if (this.state.comment === "") return;

    axios
      .post(
        `${Constants.API_URL}/location/feed`,
        {
          content: this.state.comment,
          image: null,
        },
        {
          headers: {
            Authorization: `Bearer ${window.apitoken}`,
          },
        }
      )
      .then((response) => {
        this.fethcFeed();
      });
  }

  deletePost(item) {
    axios
      .delete(`${Constants.API_URL}/location/feed/${item}`, {
        headers: {
          Authorization: `Bearer ${window.apitoken}`,
        },
      })
      .then((response) => {
        this.fethcFeed();
      });
  }

  componentDidMount() {
    this.fethcFeed();
  }

  render() {
    return (
      <>
        <div className="card feedform">
          <div className="card-body feedform__body">
            <div className="form-group feedinput">
              <input
                className="form-control form-control-lg "
                type="text"
                placeholder={`Connect with your neighbors, ${window.user.name} `}
                id="inputLarge"
                onChange={(e) => this.setState({ comment: e.target.value })}
              />
            </div>
            <button type="button" className="btn " onClick={this.createPost}>
              <Pencil />
            </button>
          </div>
        </div>

        {this.state.posts.length > 0 &&
          this.state.posts.map((item, idx) => {
            if (item.image) {
              return <CardImage item={item} key={idx} />;
            }

            return (
              <CardText item={item} deleteFnc={this.deletePost} key={idx} />
            );
          })}
      </>
    );
  }
}
