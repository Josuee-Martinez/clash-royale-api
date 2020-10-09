import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import Navbar from "./components/Navbar";
import RiverRaceData from "./components/riverRaceData";
// import WarDataInfo from "./components/WarDataInfo";

import ClanData from "./components/ClanData";
import PlayerData from "./components/playerData/PlayerData";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ClanData} />
            <Route exact path="/war" component={RiverRaceData} />

            <Route exact path="/player/:tag" component={PlayerData} />
            {/* <Route exact path="/war/:id" component={WarDataInfo} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
