import React, { useEffect, useState } from "react";
import axios from "axios";
function CreateStudent() {
  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/students/create-student", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          name: "",
          email: "",
          rollno: "",
        });
      });
  };
  useEffect(() => {}, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateStudent;