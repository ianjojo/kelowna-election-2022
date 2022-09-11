import React from "react";
import blank from "../images/blank.jpg";
export default function Candidate(props) {
  let website = props.website;
  let email = props.email;
  let image = props.image;

  let emailCode = `mailto:${email}`;

  console.log(image);
  return (
    <div className='candidate'>
      {props.image ? (
        <img src={props.image} alt='candidate' />
      ) : (
        <img src={blank} alt='candidate' />
      )}

      <h3 className='candidate__name'>{props.name}</h3>
      <div className='contact-box'>
        <h5 className='candidate__website'>
          {website ? <a href={website}>website</a> : ""}
        </h5>
        <h5 className='candidate__email'>
          <a href={emailCode}>email</a>
        </h5>
      </div>
      <div className='blurb-box'>
        <p className='blurb'>
          {props.blurb
            ? props.blurb
            : "Did not respond to my request for a summary."}
        </p>
      </div>

      <div className='right'></div>
    </div>
  );
}
