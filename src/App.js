import Home from "./components/Home";
import Council from "./components/Council";
import School from "./components/School";
import Contact from "./components/Contact";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Mayor from "./components/Mayor";
import Info from "./components/Info";
import Hamburger from "./components/Hamburger";
import Nav from "./components/Nav";
import { useState } from "react";
function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    console.log("click");
  };

  return (
    <Router>
      <div className='container'>
        <h1 className='mobile-title'>Kelowna 2022 Election Dashboard</h1>
        <header className='header'>
          <Link to='/'>
            <h1>Kelowna 2022 Election Dashboard</h1>
          </Link>
          <ul className='navbar'>
            <NavLink to='/info'>
              <li className='link'>Voting Information</li>
            </NavLink>
            <NavLink to='/contact'>
              <li className='link'>Contact</li>
            </NavLink>
          </ul>
        </header>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mayor' element={<Mayor />}></Route>
          <Route path='/council' element={<Council />}></Route>
          <Route path='/school' element={<School />}></Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
