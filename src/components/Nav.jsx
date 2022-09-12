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
        <ul className='menu'>
          <NavLink to='/'>
            <li className='sublink' onClick={closeHamburger}>
              Home
            </li>
          </NavLink>
          <NavLink to='/mayor'>
            <li className='sublink' onClick={closeHamburger}>
              Mayoral Candidates
            </li>
          </NavLink>
          <NavLink to='/council'>
            <li className='sublink' onClick={closeHamburger}>
              Council Candidates
            </li>
          </NavLink>
          <NavLink to='/school'>
            <li className='sublink' onClick={closeHamburger}>
              School Trustee Candidates
            </li>
          </NavLink>
          <NavLink to='/info'>
            <li className='sublink' onClick={closeHamburger}>
              Voting Information
            </li>
          </NavLink>
          <NavLink to='/contact'>
            <li className='sublink' onClick={closeHamburger}>
              Contact
            </li>
          </NavLink>
        </ul>
      </div>

      <style jsx='true'>{`
        .navigation {
          width: 100%;
          height: 50px;
          display: none;
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
          .navigation {
            display: block;
          }
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
            background-color: #0c0c0c63;
            backdrop-filter: blur(2px);
            height: 40vh;
            width: 100vw;
            margin-top: 50px;
            text-align: center;
            position: fixed;
            z-index: 5;
          }
          .navigation ul li {
            display: block;
            text-align: center;
            margin: 0 auto;
            list-style-type: none;
            // margin-right: 100px;
          }
        }
      `}</style>
    </div>
  );
}
