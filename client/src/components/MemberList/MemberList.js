import React from "react";

import "./styles.css";

class MemberList extends React.Component {
  render() {
    const { members } = this.props;
    
    return (
        <ul className="member_List">          
            {members.map(member => (
                <li
                key={ member }     
                className="eachMember"            
                >
                { member }
                </li>
            ))}        
        </ul>       
    );
  }
}

export default MemberList;