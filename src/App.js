import Home from "./components/Home";
import Council from "./components/Council";
import School from "./components/School";
import Contact from "./components/Contact";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Mayor from "./components/Mayor";
import Info from "./components/Info";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <h1 className='mobile-title'>
        <span className='bold'> Kelowna 2022 Election</span> Dashboard
      </h1>
      <header className='header'>
        {/*  <Link to='/'>
            <h1>Kelowna 2022 Election Dashboard</h1>
          </Link> */}
        <ul className='navbar'>
          <NavLink to='/'>
            <li className='navlink'>Home</li>
          </NavLink>
          <div className='navright'>
            <NavLink to='/info'>
              <li className='navlink'>Voting Information</li>
            </NavLink>
            <NavLink to='/contact'>
              <li className='navlink'>Contact</li>
            </NavLink>
          </div>
        </ul>
      </header>
      <Nav />
      <div className='container'>
        <div className='titlebox'>
          <Link to='/'>
            <h1 className='pagetitle'>
              <span className='bold'>
                {" "}
                Kelowna 2022 <br />
                Election
              </span>{" "}
              Dashboard
            </h1>
          </Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mayor' element={<Mayor />}></Route>
          <Route path='/council' element={<Council />}></Route>
          <Route path='/school' element={<School />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
