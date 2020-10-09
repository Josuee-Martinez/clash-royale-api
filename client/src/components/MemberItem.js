import React from "react";
import { Link } from "react-router-dom";

const MemberItem = ({ member }) => {
  // const tag = member.tag.split("#")[1]
  // console.log(tag)
  return (
    <tr>
      <td>{member.clanRank}</td>
      <td membere={member}>
        <Link to={`/player/${member.tag.split("#")[1]}`}>{member.name}</Link>
      </td>
      <td>{member.trophies}</td>
      <td className="hide">{member.role.toLowerCase()}</td>
      {/* <td>{member.donations}</td> */}
      {/* <td>{member.expLevel}</td> */}
    </tr>
  );
};

export default MemberItem;
