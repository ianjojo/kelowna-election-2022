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
        <div className='menubox'>
          <ul className='menu'>
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
      </div>

      <style jsx='true'>{`
        .navigation {
          width: 100%;
          height: 100px;
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
          }
          .navigation ul {
            display: unset;
            display: ${hamburgerOpen ? "inline" : "none"};
            background: #5952f1;
            background-size: contain;
            position: fixed;
            height: 100vh;
            width: 100vw;
            padding-top: 125px;
            text-align: center;

            z-index: 5;
          }

          .navigation ul li {
            display: block;
            text-align: center;
            margin: 0 auto;
            list-style-type: none;
            // margin-right: 100px;
            border: 1px solid white;
            border-radius: 45px;
            padding: 10px 10px;
            width: 210px;
            text-align: center;
            text-decoration: none;
            transition: all 0.2s linear;
          }
        }
      `}</style>
    </div>
  );
}
