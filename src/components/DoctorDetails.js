/* eslint-disable eqeqeq */
/* eslint-disable react/jsx-key */
import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function DoctorDetails() {
  const storeDoctors = useSelector((state) => state.doctorReducer);
  const { id } = useParams();
  console.log(id);
  return (
    <div className="details-container">
      {storeDoctors
        .filter((doctor) => doctor.id == id)
        .map((doc) => (
          <div className="details">
            <h2 class="card-title">{doc.name}</h2>
            <p class="card-text">{doc.email}</p>
            <p class="card-text">{doc.phone}</p>
            <a href="#" class="btn btn-primary">
              Reserve
            </a>
          </div>
        ))}
    </div>
  );
}

export default DoctorDetails;
