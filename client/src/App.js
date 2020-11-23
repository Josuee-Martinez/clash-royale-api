import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import About from "./components/layout/About";

import Contact from "./components/layout/Contact";

import RiverRaceLog from "./components/riverRaceData/RiverRaceLog";
import RiverRaceStats from "./components/riverRaceData/RiverRaceStats";

import CurrentRiverRace from "./components/riverRaceData/CurrentRiverRace";

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
               <Route exact path="/riverracelog" component={RiverRaceLog} />
               <Route
                  exact
                  path="/currentriverrace"
                  component={CurrentRiverRace}
               />
               <Route exact path="/player/:tag" component={PlayerData} />
               <Route
                  exact
                  path="/riverrace/clan/:index"
                  component={RiverRaceStats}
               />

               <Route exact path="/about" component={About} />
               <Route exact path="/contact" component={Contact} />
            </Switch>
         </Router>
      </Provider>
   );
}

export default App;
