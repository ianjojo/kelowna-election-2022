import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import "./styles/App.css";

import Home from "./pages/Home";
import Council from "./pages/Council";
import School from "./pages/School";
import Contact from "./pages/Contact";
import Mayor from "./pages/Mayor";
import Info from "./pages/Info";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Router>
        <h1 className='mobile-title'>
          <Link to='/'>
            <span className='bold'>
              {" "}
              Kelowna 2022 <br /> Election
            </span>{" "}
            Dashboard
          </Link>
        </h1>
        <header className='header'>
          <ul className='navbar'>
            {/*  <NavLink to='/'>
              <li className='navlink'>Home</li>
            </NavLink> */}

            <NavLink to='/info'>
              <li className='navlink'>Voting Information</li>
            </NavLink>
            <NavLink to='/contact'>
              <li className='navlink'>Contact</li>
            </NavLink>
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
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
