import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "../src/pages/home/home";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import { NewGame } from "./pages/Game/NewGame/NewGame";
import { UpdateGame } from "./pages/Game/UpdateGame/UpdateGame";
import { DeleteGame } from "./pages/Game/DeleteGame/DeleteGame";
import Login from "./pages/Login/Login";
import "./components/styles/card.css";
import ViewGame from "./pages/Game/ViewGame/ViewGame";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/login" component={Login} />

          {/* CRUD GAMES */}
          <Route path="/game/create" component={NewGame} />
          <Route path="/game/view/:id" component={ViewGame} />
          <Route path="/game/update/:id" component={UpdateGame} />
          <Route path="/game/delete/:id" component={DeleteGame} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
