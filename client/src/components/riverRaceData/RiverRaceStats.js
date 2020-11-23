import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRiverRaceData } from "../../actions/riverRaceData";

const RiverRaceStats = ({ getRiverRaceData, riverRaceData, match }) => {
   useEffect(() => {
      getRiverRaceData();
   }, [getRiverRaceData]);
   return (
      <div>
         {riverRaceData.items.length === 0
            ? ""
            : riverRaceData.items[match.params.index].standings.map(
                 (clan, i) => {
                    if (clan.clan.name === "Fire and Ice") {
                       return (
                          <div className="container" key={i}>
                             <div className="table-responsive my-5">
                                <table className="table table-hover">
                                   <thead className="thead-dark">
                                      <tr>
                                         <th scope="col">#</th>
                                         <th scope="col">Participant</th>
                                         <th scope="col">Fame</th>
                                         <th scope="col">Repair Points</th>
                                         <th scope="col">Boat Attacks</th>
                                      </tr>
                                   </thead>
                                   <tbody>
                                      {clan.clan.participants
                                         .sort((a, b) => b.fame - a.fame)
                                         .map((participant, i) => (
                                            <tr key={i}>
                                               <td>{i + 1}</td>
                                               <td>{participant.name}</td>
                                               <td>{participant.fame}</td>
                                               <td>
                                                  {participant.repairPoints}
                                               </td>
                                               <td>
                                                  {participant.boatAttacks}
                                               </td>
                                            </tr>
                                         ))}
                                   </tbody>
                                </table>
                             </div>
                          </div>
                       );
                    }
                 }
              )}
      </div>
   );
};

const mapStateToProps = (state) => ({
   riverRaceData: state.riverRaceData,
});

export default connect(mapStateToProps, { getRiverRaceData })(RiverRaceStats);
