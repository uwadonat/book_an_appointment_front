import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";
import AddDoctor from "./components/AddDoctor";
import Home from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="body">
        <nav>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">My profile</Link>
            </li>
            <li>
              <Link to="/addDoctor">AddDoctor</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
        </Routes>
        <footer>
          Designed by <i>Microverse student</i>
        </footer>
      </div>
    </Router>
  );
}

export default App;
