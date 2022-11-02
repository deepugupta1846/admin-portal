import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loggedin: false,
  getToken: localStorage.getItem("admin_user_token"),
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setLoggedInData(state, action) {
      state.data = action.payload;
    },
    setLoggedInStatus(state, action) {
      state.loggedin = action.payload;
    },
    setLoggedInToken(state, action) {
      state.getToken = action.payload;
    },
  },
});
export const { setLoggedInData, setLoggedInStatus, setLoggedInToken } =
  adminSlice.actions;
export default adminSlice.reducer;

export const adminAuthentication = (username, password) => {
  return async function authenticate(dispatch, getState) {
    try {
      const data = {
        username: username,
        password: password,
      };
      const res = await fetch(
        "https://admin--portal.herokuapp.com/adminportal/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();

      dispatch(setLoggedInData(result));
      if (result.token) {
        localStorage.setItem("admin_user_token", result.token);
        dispatch(setLoggedInStatus(true));
      }
      dispatch(setLoggedInToken(localStorage.getItem("admin_user_token")));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getLoggedinData = () => {
  return async function fetchdata(dispatch, getState) {
    try {
      const token = getState().getToken;
      if (token) {
        const data = {
          token: token,
        };
        const res = await fetch(
          "https://admin--portal.herokuapp.com/adminportal/admin/login",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const result = await res.json();
        dispatch(setLoggedInData(result));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async function logout(dispatch, getState) {
    try {
      localStorage.removeItem("admin_user_token");
      dispatch(setLoggedInToken(localStorage.getItem("admin_user_token")));
      dispatch(setLoggedInStatus(false));
      dispatch(setLoggedInData([]));
    } catch (error) {
      console.log(error);
    }
  };
};
