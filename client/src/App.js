import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      {/* main content */}
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </main>

      {/* footer here */}
      <footer>Hi iam Footer</footer>
    </div>
  );
}

export default App;
