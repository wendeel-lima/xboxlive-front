import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import { NewGame } from "./pages/Game/NewGame/NewGame";
import Login from "./pages/Login/Login";
import "./components/styles/card.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/game/create" component={NewGame} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
