import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getDoctors } from "../redux/Doctors";

const Home = () => {
  const doctors = useSelector((state) => state.doctorReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!doctors.length) {
      dispatch(getDoctors());
    }
  }, []);

  return (
    <div>
      <div className="card">
        <div>
          <ul className="home-container">
            {doctors.map((doctor) => (
              <li className="card-item">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="doctor">
                    <div className="circle">
                      <img src={doctor.image} alt="doctors" />
                    </div>
                    <h2 className="name">
                      <Link to={`/DetailsPage/${doctor.id}`}>
                        {doctor.name}
                      </Link>
                    </h2>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
