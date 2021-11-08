import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Profile from "./components/Profile";
import AddDoctor from "./components/AddDoctor";

import { Provider } from "react-redux";
import Home from "./components/Homepage";
import DoctorDetails from "./components/DoctorDetails";
import { store } from "./redux/configureStore";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
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
            <Route path="/DetailsPage/:id" element={<DoctorDetails />} />
          </Routes>
          <footer>
            Designed by <i>Microverse student</i>
          </footer>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
