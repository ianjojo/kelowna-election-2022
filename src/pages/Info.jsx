import React from "react";

export default function Info() {
  return (
    <div className='info-container'>
      <h3>General Voting Info</h3>
      <p>
        On October 15, Kelowna will elect one mayor, eight councillors and four
        trustees to the School District No. 23 Board of Education. To be
        eligible to vote, you must be:{" "}
      </p>
      <ul className='info-list'>
        <li>18 years of age or older on October 15, 2022</li>
        <li>a Canadian citizen</li>
        <li>
          a resident of BC for at least 6 months before the day you register to
          vote
        </li>
        <li>
          a resident of the City of Kelowna (no minimum amount of time) or a
          qualified non-resident property elector (must have owned the property
          for at least 30 days before the day you register to vote) and
        </li>
        <li>not disqualified from voting</li>
      </ul>
      <p>
        More information on registering to vote can be found{" "}
        <a href='https://elections.bc.ca/voting/register-to-vote/'> here.</a>
      </p>
      <br />
      <p>
        A list of voting locations can be found{" "}
        <a href='https://www.kelowna.ca/city-hall/city-government/elections/voting-locations-map'>
          here.
        </a>{" "}
      </p>
      <br />
      <p>
        If you'd prefer to vote by mail, you can click{" "}
        <a href='https://www.kelowna.ca/city-hall/city-government/elections/vote-election#:~:text=online,%EE%A2%9E'>
          here
        </a>{" "}
        to request a mail-in ballot package.
      </p>
    </div>
  );
}
