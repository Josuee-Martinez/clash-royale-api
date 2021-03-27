import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getClanData } from "../../actions/clanData";
import Moment from "react-moment";

const Home = ({ getClanData, clanData }) => {
   useEffect(() => {
      getClanData();
   }, [getClanData]);
   // console.log(clanData.members.role);
   return (
      <Fragment>
         <div className="card mt-4">
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
                        <i className="fas fa-users">
                           {" "}
                           {clanData.members.length}
                        </i>
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
            </div>
         </div>

         <div className="table-responsive mt-4">
            <table className="table table-hover">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Name</th>
                     <th scope="col">Trophies</th>
                     <th scope="col">Role</th>
                     <th scope="col">Lvl</th>
                     <th scope="col">Donations</th>
                     <th scope="col">Recieved</th>
                     <th scope="col">Active</th>
                  </tr>
               </thead>
               <tbody>
                  {clanData.members.map((member) =>
                     // <p>{member.role === "coLeader" ? member.role : ""}</p>
                     member.role === "coLeader" || member.role === "leader" ? (
                        <tr>
                           <td>{member.clanRank}</td>
                           <td membere={member}>
                              <Link to={`/player/${member.tag.split("#")[1]}`}>
                                 {member.name}
                              </Link>
                           </td>
                           <td>{member.trophies}</td>
                           <td>
                              {member.role.charAt(0).toUpperCase() +
                                 member.role
                                    .replace(/([a-z])([A-Z])/g, "$1-$2")
                                    .slice(1)}
                           </td>
                           <td>{member.expLevel}</td>

                           <td>
                              <i class="fas fa-sort-up"></i>
                              {member.donations}
                           </td>
                           <td>
                              <i class="fas fa-sort-down"></i>
                              {member.donationsReceived}
                           </td>
                           <td>
                              <Moment fromNow>{member.lastSeen}</Moment>
                           </td>
                        </tr>
                     ) : (
                        ""
                     )
                  )}
               </tbody>
            </table>
         </div>
      </Fragment>
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
