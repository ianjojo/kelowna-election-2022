import React from "react";
import { NavLink } from "react-router-dom";
import Countdown from "../components/Countdown";
import check from "../images/check.png";

export default function Intro() {
  let deadline = "October, 15, 2022";
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
        Update: Election day is upon us and the results are coming in fast! I'll
        have charts posted once things are finalized - thanks for checking in!
        👻
      </p>
      <p className='intro'>
        This website was put together quickly to provide a one-stop shop for
        people unsure about how to vote in the upcoming civic election. The idea
        was to provide a listing of all candidates along with a link to their
        own websites, a photo and a short blurb about them or their platform.
        All candidates are listed alphabetically based on their last names.
      </p>
      <p className='intro'>
        I've contacted all candidates and asked for this short summary and so
        far about 60% of candidates have responded. The candidates who have
        replied to my email are now marked with a checkmark icon. Also, I've
        just launched a version for{" "}
        <a className='contactme' href='http://kelowna2022.com/west'>
          West Kelowna.
        </a>{" "}
        I've attempted to fill in the non-responders' summaries with information
        from the web - if any candidate would like to update their text,{" "}
        <a href='mailto:ianallanjohnston@gmail.com' className='contactme'>
          send me a message.
        </a>
      </p>
      <p className='intro'></p>
      {/*    <Countdown deadline={deadline} /> */}
      {/*    <p className='intro'>
        Feel free to{" "}
        <a href='mailto:ianallanjohnston@gmail.com' className='contactme'>
          contact me
        </a>{" "}
        with any questions or, if you're a candidate who hasn't submitted a
        fifty word summary, better late than never!
      </p> */}
    </div>
  );
}
