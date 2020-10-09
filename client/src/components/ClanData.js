import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MemberItem from "./MemberItem";
import { getClanData } from "../actions/clanData";

const ClanData = ({ getClanData, clanData }) => {
  useEffect(() => {
    getClanData();
  }, [getClanData]);
  return (
    <div className="card my-5">
      <div className="card-body center">
        <h5 className="card-title">
          {/* <div>
            <img src={clanData.badge} alt="" /> */}
          {/* </div> */}
          {clanData.name}
        </h5>
        <p className="card-text ">{clanData.description}</p>
        <hr />
        <div className="row ">
          <div className="col-6">
            <p>War trophies</p>
            <h5>
              <span role="img" aria-label="trophie">
                🏆
              </span>
              {clanData.clanWarTrophies}
            </h5>
          </div>

          <div className="col-6">
            <p>Required</p>
            <h5>
              <span role="img" aria-label="trophie">
                🏆
              </span>
              {clanData.requiredTrophies}
            </h5>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-6">
            <p>Tag</p>
            <h5>
              <i className="fas fa-tag"></i> {clanData.tag}
            </h5>
          </div>
          <div className="col-6">
            <p>Members</p>
            <h5>
              <i className="fas fa-users"></i> {clanData.members.length}
            </h5>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6">
            <p>Location</p>
            <h5>
              <span role="img" aria-label="flag">
                🇺🇸
              </span>
              {clanData.location}
            </h5>
          </div>
          <div className="col-6">
            <p>Clan Score</p>
            <h5>
              <span role="img" aria-label="trophie">
                🏆
              </span>
              {clanData.clanScore}
            </h5>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-fixed table-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Trophies</th>
              <th className="hide" scope="col">
                Role
              </th>
              {/* <th scope="col">Donations</th> */}
              {/* <th scope="col">Level</th> */}
            </tr>
          </thead>
          <tbody>
            {clanData.members.map((member) => (
              <MemberItem key={member.clanRank} member={member}></MemberItem>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ClanData.propTypes = {
  getClanData: PropTypes.func.isRequired,
  clanData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  clanData: state.clanData,
});

export default connect(mapStateToProps, { getClanData })(ClanData);
