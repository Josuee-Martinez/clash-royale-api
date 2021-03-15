import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getClanData } from "../../actions/clanData";

const Home = ({ getClanData, clanData }) => {
   useEffect(() => {
      getClanData();
      console.log(clanData);
   }, [getClanData]);
   return (
      <div className="card">
         <div className="card-body center">
            <div className="row">
               <div className="col-12">
                  <h3>{clanData.name}</h3>
                  <p>{clanData.description}</p>
               </div>
            </div>
            <hr />
            <div className="row">
               <div className="col-6">
                  <p>War trophies</p>
                  <p>
                     <i className="fas fa-trophy">
                        {" "}
                        {clanData.clanWarTrophies}
                     </i>
                  </p>
               </div>

               <div className="col-6">
                  <p>Clan Score</p>
                  <p>
                     <i className="fas fa-trophy"> {clanData.clanScore}</i>
                  </p>
               </div>
            </div>
            <hr />
            <div className="row">
               <div className="col-6">
                  <p>Tag</p>
                  <p>
                     <i className="fas fa-tag"> {clanData.tag}</i>
                  </p>
               </div>
               <div className="col-6">
                  <p>Members</p>
                  <p>
                     <i className="fas fa-users"> {clanData.members.length}</i>
                  </p>
               </div>
            </div>
            <hr />
            <div className="row">
               <div className="col-6">
                  <p>Type</p>
                  <p>
                     <i className="fas fa-lock-open"> {clanData.type}</i>
                  </p>
               </div>
               <div className="col-6">
                  <p>Donations</p>
                  <p>
                     <i className="fas fa-caret-up">
                        {" "}
                        {clanData.donationsPerWeek}
                     </i>
                  </p>
               </div>
            </div>
            <hr />
            <div className="row">
               <div className="col-6">
                  <p>Location</p>
                  <p>
                     <i class="fas fa-flag-usa"> {clanData.location}</i>
                  </p>
               </div>
               <div className="col-6">
                  <p>Required Trophies</p>
                  <p>
                     <i className="fas fa-trophy">
                        {" "}
                        {clanData.requiredTrophies}
                     </i>
                  </p>
               </div>
            </div>
            {/* <hr /> */}
            {/* <div className="row">
                     <div className="col-12">
                        <h5>
                           <a target="_blank" href="https://discord.gg/3YZZ8Ef">
                              <i class="fab fa-discord">
                                 {" "}
                                 Join our discord community
                              </i>
                           </a>
                        </h5>
                     </div>
                  </div> */}
         </div>
      </div>
   );
};

Home.propTypes = {
   getClanData: PropTypes.func.isRequired,
   clanData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
   clanData: state.clanData,
});

export default connect(mapStateToProps, { getClanData })(Home);
