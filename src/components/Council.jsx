import React from "react";
import { v4 as uuidv4 } from "uuid";
import Candidate from "./Candidate";
import { NavLink } from "react-router-dom";
import { council } from "../council";

export default function Mayor() {
  return (
    <>
      <ul className='menu'>
        <NavLink to='/mayor'>
          <li className='link'>Mayoral Candidates</li>
        </NavLink>
        <NavLink to='/council'>
          <li className='link'>Council Candidates</li>
        </NavLink>
        <NavLink to='/school'>
          <li className='link'>School Trustee Candidates</li>
        </NavLink>
      </ul>

      <div className='candidate-list'>
        {council.map((data, key) => {
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
    </>
  );
}
