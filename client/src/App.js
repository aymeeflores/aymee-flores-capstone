import "./App.scss";
import "bootswatch/dist/quartz/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import React from "react";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import Rightbar from "./Components/Rightbar/Rightbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Events from "./pages/Events/Events";
import Member from "./Components/Member/Member";
import Login from "./Components/Login/Login";

export default class App extends React.Component {
  render() {
    // show layout if user is auth
    return (
      <div className="App">
        <Router>
          <header>
            <Navbar />
          </header>

          <div className="container">
            <aside className="container__sidebar">
              <Sidebar />
            </aside>
            <main className="container__main">
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/feed" component={Feed} />
                <Route path="/member" component={Member} />
                <Route path="/events" exact component={Events} />
                <Redirect from="/" to="/feed" exact />
              </Switch>
            </main>
            <aside className="container__rightbar">
              <Rightbar />
            </aside>
          </div>
        </Router>
      </div>
    );
  }
}
