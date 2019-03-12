import React, { Component } from "react";
import "./App.css";
import Categories from "./views/categoryViews/Categories";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Categories</Link>
            </li>
            <li>
              <Link to="/categoriesExpensive">Expensive Categories</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Categories} />
          <Route path="/categoriesExpensive" component={CategoriesExpensive} />
        </div>
      </Router>
    );
  }
}

export default App;
