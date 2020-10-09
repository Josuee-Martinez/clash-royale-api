import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getRiverRaceData } from "../actions/riverRaceData";
// import * as uuid from "uuid";
// import Moment from "react-moment";
// import WarDataInfo from "./WarDataInfo";

const RiverRaceData = ({ getRiverRaceData, riverRaceData }) => {
  useEffect(() => {
    getRiverRaceData();
  }, [getRiverRaceData]);
  return (
    <Fragment>
      {riverRaceData.items.map((item, i) => (
        // <div className="card my-5" key={i}>
        <div className="card-body center" key={i}>
          <div className="table-responsive">
            <table className="table table-hover table-fixed table-sm">
              <thead className="thead-dark">
                <tr>
                  <th className="col">Clan</th>
                  <th className="col">Rank</th>
                  <th className="col">Trophies</th>
                </tr>
              </thead>
              <tbody>
                {item.standings.map((std, i) => (
                  <tr
                    key={i}
                    className={
                      std.clan.name === "Fire and Ice" ? "table-info" : ""
                    }
                  >
                    <td>{std.clan.name}</td>
                    <td>{std.rank}</td>
                    <td>{std.trophyChange}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        // </div>
      ))}
    </Fragment>
  );
};

RiverRaceData.propTypes = {
  getRiverRaceData: PropTypes.func.isRequired,
  riverRaceData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  riverRaceData: state.riverRaceData,
});

export default connect(mapStateToProps, { getRiverRaceData })(RiverRaceData);
