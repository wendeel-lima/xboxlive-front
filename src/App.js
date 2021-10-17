import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />

          <Route path="/product/create" component={Login} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
