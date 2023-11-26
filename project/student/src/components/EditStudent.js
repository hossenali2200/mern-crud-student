import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditStudent() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/students/update-student/" + params.id, {
        name: userForm.name,
        email: userForm.email,
        rollno: userForm.rollno,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/student-list");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3000/students/get-student/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          email: res.data.data.email,
          rollno: res.data.data.rollno,
        });
      });
  }, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">firstName</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={userForm.firstName}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">lastName</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={userForm.lastName}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">gender</label>
            <input
              type="text"
              className="form-control"
              name="gender"
              id="gender"
              value={userForm.gender}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">dateOfBirth</label>
            <input
              type="text"
              className="form-control"
              name="dateOfBirth"
              id="dateOfBirth"
              value={userForm.dateOfBirth}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">nationality</label>
            <input
              type="text"
              className="form-control"
              name="nationality"
              id="nationality"
              value={userForm.nationality}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              id="address"
              value={userForm.address}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              id="phone"
              value={userForm.phone}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">admissionDate</label>
            <input
              type="text"
              className="form-control"
              name="admissionDate"
              id="admissionDate"
              value={userForm.admissionDate}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">courses</label>
            <input
              type="text"
              className="form-control"
              name="courses"
              id="courses"
              value={userForm.courses}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditStudent;