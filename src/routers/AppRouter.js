import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Home from "../components/Home";
import Board from "../components/Board";
import NotFoundPage from "../components/NotFoundPage";
//import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:boardID" component={Board} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
