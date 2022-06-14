import React, { Component } from "react";
import "./Login.scss";
import Constants from "../../constants";
import axios from "axios";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: null,
			login: { email: "", code: "" },
			name: "",
		};

		this.doLogin = this.doLogin.bind(this);
		this.doLogout = this.doLogout.bind(this);
	}

	doLogin() {
		// TODO DO LOGIN AGAINST API DATABASE
		const { email, code } = this.state.login;

		axios
			.post(`${Constants.API_URL}/login`, {
				email,
				code,
			})
			.then((response) => {
				// console.log(response);
				this.props.fnc(response.data);
			})
			.catch((e) => {});
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
						<div className=" row">
							<h1 className=" mainlogin__greeting">Welcome Back!</h1>
							<h3 className=" mainlogin__subtitle">Connect with your neighbors</h3>
						</div>

						<div className="logincontainer">
							<label htmlFor="exampleInputEmail1" className="logincontainer__loginlabel">
								Email address
							</label>
							<input
								type="email"
								className="form-control logininput"
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
						</div>
						<div className="logincontainer ">
							<label htmlFor="exampleInputPassword1" className="logincontainer__loginlabel">
								Password
							</label>
							<input
								type="password"
								className="form-control logininput"
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
						<button
							type="button"
							className="loginbtn"
							// type="button"
							onClick={this.doLogin}
						>
							Log In
						</button>
					</form>
				</>
			);
		}
	}
}
