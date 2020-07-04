import React from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import NotFound from "./components/NotFound/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/:movieId" component={Movie} />
        {/*
        <Route component={NotFound} />
        */}
      </React.Fragment>
    </Router>
  );
}

export default App;
