import Hamburger from "./Hamburger";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeHamburger = () => {
    setHamburgerOpen(false);
  };

  return (
    <div>
      <div className='navigation'>
        <ul>
          <NavLink to='/'>
            <li className='link' onClick={closeHamburger}>
              Home
            </li>
          </NavLink>
          <NavLink to='/mayor'>
            <li className='link' onClick={closeHamburger}>
              Mayoral Candidates
            </li>
          </NavLink>
          <NavLink to='/council'>
            <li className='link' onClick={toggleHamburger}>
              Council Candidates
            </li>
          </NavLink>
          <NavLink to='/school'>
            <li className='link' onClick={toggleHamburger}>
              School Trustee Candidates
            </li>
          </NavLink>
          <NavLink to='/info'>
            <li className='link' onClick={closeHamburger}>
              Voting Information
            </li>
          </NavLink>
          <NavLink to='/contact'>
            <li className='link' onClick={closeHamburger}>
              Contact
            </li>
          </NavLink>
        </ul>
        <div className='hamburger' onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
      </div>

      <style jsx='true'>{`
        .navigation {
          width: 100%;
          height: 50px;
        }

        .navigation ul {
          
          display: none;
          flex-wrap: wrap;
          float: right;
          margin: 0px;
          padding: 0px;
          overflow: hidden;
        }
        .navigation ul li {
          list-style-type: none;
          padding-right: 10px;
        }
        .hamburger {
          display: none;
          z-index: 6;
        }
        @media (max-width: 767px) {
          .hamburger {
            height: 2rem;
            display: flex;
            position: fixed;
            right: 10px;
            padding-top: 10px;
            margin-left: 10px;
            z-index: 6;
          }

          .navigation ul {
            display: unset;
            display: ${hamburgerOpen ? "inline" : "none"};
            background-color: #ffd54f;
            height: 100vh;
            width: 40vw;
            margin-top: 50px;
            position: fixed;
            z-index: 5;
          }
          .navigation ul li {
            display: 
            list-style-type: none;
            padding-right: 100px;
          }
        }
      `}</style>
    </div>
  );
}
