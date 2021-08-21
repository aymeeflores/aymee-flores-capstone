import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      login: { email: "test@gmail.com", code: "123456" },
      name: "Lux",
    };

    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }
  doLogin() {
    // TODO DO LOGIN AGAINST API DATABASE
    const { email, code } = this.state.login;

    if (email === "test@gmail.com" && code === "123456") {
      this.setState({ ...this.state, user: { email: email } });
    }
  }

  doLogout() {
    // TODO DO LOGOUT AGAINST API
    this.setState({ user: null });
  }
  render() {
    // show login if user is not logged in

    if (!this.state.user) {
      return (
        <>
          <form className="mainlogin">
            {/* <legend className="mainlogin__legend"> Resident Social</legend> */}
            <div class="form-group row">
              <label
                for="staticEmail"
                class="col-sm-2 col-form-label"
                className="mainlogin__greeting"
              >
                Hello {this.state.name}
              </label>
            </div>

            <div class="form-group mainlogin">
              <label
                for="exampleInputEmail1"
                class="form-label mt-4 loginlabel"
              >
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) =>
                  this.setState({
                    login: { ...this.state.login, email: e.target.value },
                  })
                }
                defaultValue={this.state.login.email}
              />
              <small id="emailHelp" class="form-text text-muted disclaimer">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group mainlogin">
              <label
                for="exampleInputPassword1"
                class="form-label mt-4 loginlabel"
              >
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) =>
                  this.setState({
                    login: { ...this.state.login, code: e.target.value },
                  })
                }
                defaultValue={this.state.login.code}
              />
            </div>
          </form>
          <button
            type="button"
            class="btn btn-primary loginbtn"
            type="button"
            onClick={this.doLogin}
          >
            Log In
          </button>
        </>
      );
    }
  }
}
