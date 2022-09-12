import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../mayor";
import Candidate from "../components/Candidate";
import { NavLink } from "react-router-dom";
import { mayors } from "../mayor";

export default function Mayor() {
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
              key={uuidv4()}
              name={data.name}
              website={data.website}
              image={data.image}
              email={data.email}
              blurb={data.blurb}
            />
          );
        })}
      </div>
    </div>
  );
}
