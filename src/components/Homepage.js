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
    <div className="home-container">
      <div className="card">
        <div>
          {doctors.map((doctor) => (
            <div className="col-12 col-md-6 col-lg-4">
              <div className="doctor">
                <div className="circle">
                  <img src={doctor.image} alt="doctors" />
                </div>
                <h2 className="name">
                  <Link to={`/DetailsPage/${doctor.id}`}>{doctor.name}</Link>
                </h2>
              </div>
            </div>
          ))}
        </div>
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" alt="imagee" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">My description</p>
          <a href="#" className="btn btn-success">
            Reserve
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
