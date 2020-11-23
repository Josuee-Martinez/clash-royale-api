import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const MemberItem = ({ member }) => {
  return (
    <tr>
      <td>{member.clanRank}</td>
      <td membere={member}>
        <Link to={`/player/${member.tag.split("#")[1]}`}>{member.name}</Link>
      </td>
      <td>{member.trophies}</td>
      <td>
        {member.role.charAt(0).toUpperCase() +
          member.role.replace(/([a-z])([A-Z])/g, "$1-$2").slice(1)}
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
  );
};

export default MemberItem;
