import React, { useState } from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({ name: "", email: "", role: ""});

    const handleChanges = e => {
        setMember({...member, [e.target.name]: e.target.value });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
                 <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChanges}
                    value={member.name}
                />
            <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    onChange={handleChanges}
                    value={member.email}
                 />
            <lable htmlFor="role">Role</lable>
                <input  
                    id="role"
                    type="text"
                    name="role"
                    onChange={handleChanges}
                    value={member.role}
                />
            <button className="addButton" type="Add">Add Team Member</button>
        </form>
    );
};

export default MemberForm;