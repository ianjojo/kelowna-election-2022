import React from "react";
import { NavLink } from "react-router-dom";
import Countdown from "../components/Countdown";
export default function Intro() {
  let deadline = "October, 14, 2022";
  return (
    <div className='intropage'>
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

      {/* <img src={Kelowna} className='kelowna' alt='' /> */}
      <p className='intro'>
        This website was put together quickly to provide a one-stop shop for
        people unsure about how to vote in the upcoming civic election. The idea
        was to provide a listing of all candidates along with a link to their
        own websites, a photo and a short blurb about them or their platform.
        All candidates are listed alphabetically based on their last names.
      </p>
      <p className='intro'>
        I've contacted all candidates and asked for this short summary and so
        far very few people have responded. I get it - I'm not big media, I'm
        just a dude making a website - but this still influences my vote. What
        began as a solution to a lack of easily attainable information in one
        place about all candidates, has now become an interesting experiment in
        discovering which candidates are responsive to the general public (me).
      </p>
      <Countdown deadline={deadline} />
      <p className='intro'>
        Feel free to contact me with any questions or, if you're a candidate who
        hasn't submitted a fifty word summary, better late than never!
      </p>
    </div>
  );
}