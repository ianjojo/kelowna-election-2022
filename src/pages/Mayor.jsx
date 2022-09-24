import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../data/mayor";
import Candidate from "../components/Candidate";
import { NavLink } from "react-router-dom";
import { mayors } from "../data/mayor";
import { useState } from "react";

export default function Mayor() {
  const [mayor, setMayor] = useState([]);
  const addToVotingList = (e) => {
    setMayor(e.target.computedName);
    console.log(mayor);
  };
  return (
    <div>
      <ul className='menu'>
        <NavLink to='/mayor'>
          <li className='sublink'>Mayoral Candidates</li>
        </NavLink>
        <NavLink to='/council'>
          <li className='sublink'>Council Candidates</li>
        </NavLink>
        <NavLink to='/school'>
          <li className='sublink'>School Trustee Candidates</li>
        </NavLink>
      </ul>
      <div className='candidate-list'>
        {mayors.map((data, key) => {
          return (
            <Candidate
              addToVotingList={addToVotingList}
              key={uuidv4()}
              name={data.name}
              website={data.website}
              image={data.image}
              email={data.email}
              blurb={data.blurb}
              replied={data.replied}
            />
          );
        })}
      </div>
    </div>
  );
}
