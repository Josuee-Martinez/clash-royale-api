import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import Contact from "./components/layout/Contact";

import RiverRaceData from "./components/riverRaceData";
// import WarDataInfo from "./components/WarDataInfo";

import MemberData from "./components/memberData/MemberData";
import PlayerData from "./components/playerData/PlayerData";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={MemberData} />
          <Route exact path="/war" component={RiverRaceData} />
          <Route exact path="/player/:tag" component={PlayerData} />
          {/* <Route exact path="/war/:id" component={WarDataInfo} /> */}
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
