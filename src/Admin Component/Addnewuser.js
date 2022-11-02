import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { insertUsers } from "../Redux/userSlice";
import { getAllUsers } from "../Redux/userSlice";
import "../css/form.css";
import Swal from "sweetalert2";
export const Addnewuser = () => {
  const [userdata, setuserdata] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    adress: "",
    gender: "",
    status: "",
  });

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userdata);
    dispatch(insertUsers(userdata));
    Swal.fire("Good job!", "User Saved", "success");
    dispatch(getAllUsers());
    // navigate("/admin/users");
    setuserdata({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      adress: "",
      gender: "",
      status: "",
    });
  };
  return (
    <>
      <div className="form-container">
        <div className="form-card">
          <div className="form-header">
            <h2>Add New User</h2>
          </div>
          <div className="form-body">
            <form onSubmit={onSubmit}>
              <div className="form-input">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={userdata.firstname}
                    onChange={(e) => {
                      setuserdata({ ...userdata, firstname: e.target.value });
                    }}
                    style={{ width: "100%", marginLeft: "-20px" }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={userdata.lastname}
                    onChange={(e) => {
                      setuserdata({ ...userdata, lastname: e.target.value });
                    }}
                    style={{ width: "100%" }}
                    required
                  />
                </div>
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="username"
                  value={userdata.username}
                  onChange={(e) => {
                    setuserdata({ ...userdata, username: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="password"
                  value={userdata.password}
                  onChange={(e) => {
                    setuserdata({ ...userdata, password: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Address"
                  value={userdata.adress}
                  onChange={(e) => {
                    setuserdata({ ...userdata, adress: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="form-input">
                <div>Gender</div>
                <div className="form-input">
                  <div className="form-input">
                    <label>Male</label>
                    <input
                      type="radio"
                      name="gender"
                      placeholder="password"
                      value="male"
                      onChange={(e) => {
                        setuserdata({ ...userdata, gender: e.target.value });
                      }}
                      style={{ marginLeft: "10px" }}
                      required
                    />
                  </div>
                  <div className="form-input">
                    <label>Female</label>
                    <input
                      type="radio"
                      name="gender"
                      placeholder="password"
                      value="female"
                      onChange={(e) => {
                        setuserdata({ ...userdata, gender: e.target.value });
                      }}
                      style={{ marginLeft: "10px" }}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-input">
                <div>Select Status</div>
                <select
                  onChange={(e) => {
                    setuserdata({ ...userdata, status: e.target.value });
                  }}
                  required
                >
                  <option value="active">Active</option>
                  <option value="Inactive">InActive</option>
                </select>
              </div>
              <div className="form-input">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
