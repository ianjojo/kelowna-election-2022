import React from "react";
import blank from "../images/blank.jpg";
import web from "../images/web.png";
import mail from "../images/mail.png";
export default function Candidate(props) {
  let website = props.website;
  let email = props.email;
  let emailCode = `mailto:${email}`;

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
          {website ? (
            <a href={website} target='_blank' rel='noreferrer'>
              <img className='icon' src={web} alt='' />
            </a>
          ) : (
            ""
          )}
        </h5>
        <h5 className='candidate__email'>
          <a href={emailCode}>
            <img className='icon' src={mail} alt='' />
          </a>
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
