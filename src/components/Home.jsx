import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Footer from "./Footer";
import Mayor from "./Mayor";
import Intro from "./Intro";
import School from "./School";
function Home() {
  return (
    <div className='container'>
      <Intro />
      <Footer />
    </div>
  );
}

export default Home;
