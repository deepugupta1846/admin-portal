import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delete_user } from "../Redux/userSlice";
import Swal from "sweetalert2";
import { getAllUsers } from "../Redux/userSlice";

export const Showuser = () => {
  const {
    data: users,
    pageSize,
    loading,
  } = useSelector((state) => state.users);
  const [searchData, setSearchData] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [deleteid, setDeleteid] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const totalPageNumber = new Array(pageSize).fill(null).map((v, i) => i);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllUsers(pageNumber));
    console.log(loading);
  }, [deleteid, pageNumber]);
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_user(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setDeleteid(id);
      }
    });
  };
  const viewUser = (data) => {
    Swal.fire({
      title: `${data.firstname} ${data.lastname} `,
      html: `
      <table class="table table-striped">
      
        <tr>
          <td>username:- </td>
          <td>${data.username}</td>
        </tr>
        <tr>
          <td>Password:- </td>
          <td>${data.password}</td>
        </tr>
        <tr>
          <td>Address:- </td>
          <td>${data.adress}</td>
        </tr>

        <tr>
          <td>Gender:- </td>
          <td>${data.gender}</td>
        </tr>
        <tr>
          <td>Status:- </td>
          <td>${data.status}</td>
        </tr>
      </table>
      
      `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Edit?",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/admin/updateuser", { state: data });
      }
    });
  };
  if (users.length <= 0) {
    return (
      <>
        <p>Loading....</p>;
      </>
    );
  } else {
    return (
      <>
        <div className="user_home_container">
          <div className="body-container">
            <div className="show_user_container">
              <div className="show_list">
                <div className="list_header">
                  <div style={{ padding: "10px" }}>Users</div>
                  <div style={{ padding: "10px" }}>
                    <Link to="/admin/adduser" className="route-link">
                      <i class="fa-sharp fa-solid fa-plus"></i>Add New User
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="user_list_body">
                    <input
                      type="search"
                      className="searchbar"
                      placeholder="Search by username and name"
                      value={searchData}
                      onChange={(e) => {
                        setSearchData(e.target.value);
                      }}
                    />
                    <label>Filter</label>
                    <select
                      className="form-input"
                      onChange={(e) => {
                        setStatus(e.target.value);
                      }}
                    >
                      <option value="">Select Status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <select
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="admin_title">
                    <label className="col">Sr.No</label>
                    <label className="col">First Name</label>
                    <label className="col">Last Name</label>
                    <label className="col">Username</label>
                    <label className="col">Status</label>
                    <label className="col">Action</label>
                    <label className="col"></label>
                  </div>
                  {users
                    .filter((data) => {
                      if (searchData === "") {
                        return data;
                      } else if (
                        data.firstname
                          .toLowerCase()
                          .match(searchData.toLowerCase()) ||
                        data.username
                          .toLowerCase()
                          .match(searchData.toLowerCase())
                      ) {
                        return data;
                      }
                    })
                    .filter((data) => {
                      if (status === "") {
                        return data;
                      } else if (
                        data.status.toLowerCase() === status.toLowerCase()
                      ) {
                        return data;
                      }
                    })
                    .filter((data) => {
                      if (gender === "") {
                        return data;
                      } else if (
                        data.gender.toLowerCase() === gender.toLowerCase()
                      ) {
                        return data;
                      }
                    })
                    .map((data, index) => {
                      return (
                        <div className="admin_title">
                          <label className="col">{index + 1}</label>

                          <label className="col">{data.firstname}</label>

                          <label className="col">{data.lastname}</label>

                          <label className="col">{data.username}</label>

                          <label className="col">{data.status}</label>

                          <label
                            className="col"
                            onClick={() => {
                              viewUser(data);
                            }}
                          >
                            <i class="fa-solid fa-eye"></i>
                          </label>

                          <label
                            className="col"
                            onClick={() => {
                              deleteUser(data._id);
                            }}
                          >
                            <i class="fa-sharp fa-solid fa-trash"></i>
                          </label>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "100vw",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              style={{ margin: "5px", padding: "5px" }}
              onClick={() => {
                if (pageNumber != 0) {
                  setPageNumber(pageNumber - 1);
                }
              }}
            >
              Prev
            </button>
            {totalPageNumber.map((data) => {
              return (
                <button
                  style={{ margin: "5px", padding: "5px" }}
                  onClick={() => {
                    setPageNumber(data);
                  }}
                >
                  {data}
                </button>
              );
            })}
            <button
              style={{ margin: "5px", padding: "5px" }}
              onClick={() => {
                console.log(pageSize);
                if (pageNumber != pageSize - 1) {
                  setPageNumber(pageNumber + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
};
