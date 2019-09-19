import React from "react";

const Members = props => {
    return (
    <div className="member-list">
        {props.members.map(member => (
            <div className="member" key={member.id}>
                <h2 className="member-name">{member.name}</h2>
                <h4 className="member-email">{member.email}</h4>
                <h3 className="member-role">{member.role}</h3>
                
            </div>
        ))}
    </div>
    );
};

export default Members;