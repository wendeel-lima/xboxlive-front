import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import "./components/styles/card.css";

import Home from "../src/pages/home/home";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

import ViewGame from "./pages/Game/ViewGame/ViewGame";
import { NewGame } from "./pages/Game/NewGame/NewGame";
import { UpdateGame } from "./pages/Game/UpdateGame/UpdateGame";
import { DeleteGame } from "./pages/Game/DeleteGame/DeleteGame";

import ViewGenre from "./pages/Genre/ViewGenre/ViewGenre";
import { CreateGenre } from "./pages/Genre/CreateGenre/CreateGenre";
import { UpdateGenre } from "./pages/Genre/UpdateGenre/UpdateGenre";
import { DeleteGenre } from "./pages/Genre/DeleteGenre/DeleteGenre";

import { CreateUser } from "./pages/User/CreateUser/CreateUser";
import { DeleteUser } from "./pages/User/DeleteUser/DeleteUser";
import { UpdateUser } from "./pages/User/UpdateUser/UpdateUser";
import ViewUser from "./pages/User/ViewUser/ViewUser";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/login" component={Login} />

          {/* CRUD GAMES */}
          <GuardedRoute path="/game/create" component={NewGame} />
          <Route path="/game/view/:id" component={ViewGame} />
          <GuardedRoute path="/game/update/:id" component={UpdateGame} />
          <GuardedRoute path="/game/delete/:id" component={DeleteGame} />

          {/* CRUD GENRE */}
          <GuardedRoute path="/genre/create" component={CreateGenre} />
          <Route path="/genre/view/:id" component={ViewGenre} />
          <GuardedRoute path="/genre/update/:id" component={UpdateGenre} />
          <GuardedRoute path="/genre/delete/:id" component={DeleteGenre} />

          {/* CRUD USER */}
          <Route path="/user/create" component={CreateUser} />
          <GuardedRoute path="/user/view/:id" component={ViewUser} />
          <GuardedRoute path="/user/update/:id" component={UpdateUser} />
          <GuardedRoute path="/user/delete/:id" component={DeleteUser} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
