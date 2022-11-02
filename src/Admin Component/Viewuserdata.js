import React from "react";

import { useNavigate } from "react-router-dom";
export const Viewuserdata = (props) => {
  const data = props.data[0];
  const navigate = useNavigate();
  const updateHandler = () => {
    navigate("/admin/updateuser", { state: data });
  };
  return (
    <>
      <div className="user_body-container">
        <div className="user_show_list">
          <div className="list_header">
            <div>
              {data.firstname}&nbsp;{data.lastname}
              {"(User)"}
            </div>
            <div>
              <i
                class="fa-solid fa-pen-to-square"
                style={{ fontSize: "20px", cursor: "pointer" }}
                onClick={updateHandler}
              ></i>
            </div>
            <div onClick={props.close}>
              <i
                class="fa-solid fa-rectangle-xmark"
                style={{ fontSize: "20px", cursor: "pointer" }}
              ></i>
            </div>
          </div>
          <div className="list_body">
            <div className="admin_title">
              <label>First Name</label>
              <label>{data.firstname}</label>
            </div>
            <div className="user_title">
              <label>Last Name</label>
              <label>{data.lastname}</label>
            </div>
            <div className="user_title">
              <label>Username</label>
              <label>{data.username}</label>
            </div>
            <div className="user_title">
              <label>Password</label>
              <label>{data.password}</label>
            </div>
            <div className="user_title">
              <label>Address</label>
              <label>{data.adress}</label>
            </div>
            <div className="user_title">
              <label>Gender</label>
              <label>{data.gender}</label>
            </div>
            <div className="user_title">
              <label>Status</label>
              <label>{data.status}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
