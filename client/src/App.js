import "./App.scss";
import "bootswatch/dist/quartz/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
import React from "react";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Feed from "./Components/Feed/Feed";
import Member from "./Components/Member/Member";
import Events from "./pages/Events/Events";
import Messages from "./pages/Messages/Messages";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
    };

    this.doLogin = this.doLogin.bind(this);
    this.doLogout = this.doLogout.bind(this);
  }

  doLogin(user) {
    window.apitoken = user.token;
    window.user = user;

    sessionStorage.setItem("apitoken", user.token);
    sessionStorage.setItem("user", JSON.stringify(user));

    console.log(window.apitoken);

    this.setState({ user: user });
  }

  componentDidMount() {
    let apitoken = sessionStorage.getItem("apitoken");
    let user = sessionStorage.getItem("user");

    if (apitoken) {
      window.apitoken = apitoken;
      window.user = JSON.parse(user);

      this.setState({
        user: window.user,
      });
    }
  }

  doLogout() {
    this.setState({ user: null });
    sessionStorage.clear();
  }

  render() {
    if (!this.state.user) {
      return <Login fnc={this.doLogin} />;
    }

    // show layout if user is auth
    return (
      <>
        <div className="App">
          <Router>
            <Navbar dologoutfnc={this.doLogout} />

            <div className="container">
              <main className="container__main">
                <Switch>
                  <Route path="/" exact component={Feed} />
                  <Route path="/messages" component={Messages} />
                  <Route path="/members" component={Member} />
                  <Route path="/events" component={Events} />
                </Switch>
              </main>
            </div>
          </Router>
        </div>
      </>
    );
  }
}
