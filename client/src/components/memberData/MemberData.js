import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MemberItem from "./MemberItem";
import { getClanData } from "../../actions/clanData";

const MemberData = ({ getClanData, clanData: { members } }) => {
   useEffect(() => {
      getClanData();
   }, [getClanData]);
   return (
      <div className="container">
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
                  {members.map((member) => (
                     <MemberItem
                        key={member.clanRank}
                        member={member}
                     ></MemberItem>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

MemberData.propTypes = {
   getClanData: PropTypes.func.isRequired,
   clanData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
   clanData: state.clanData,
});

export default connect(mapStateToProps, { getClanData })(MemberData);
