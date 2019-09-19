import React, { useState } from 'react';
import ReactDom from 'react-dom';

import MemberForm from './components/Form';
import Form from './components/Form';
import Members from './components/Members';

import "./styles.scss";

import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Tara Gamache",
      email: "tara.gamache13@gmail.com",
      role: "Designer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: member.index,
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }
  return (
    <div className="App">
      <h1>Team Member List</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members} />
    </div>
  );
}

export default App;
