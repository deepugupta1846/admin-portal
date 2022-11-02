import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  saveUser: [],
  pageSize: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setAllUsers(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSaveData(state, action) {
      state.data = action.payload;
    },
    setPageSize(state, action) {
      state.pageSize = action.payload;
    },
  },
});
export const { setAllUsers, setLoading, setSaveData, setPageSize } =
  userSlice.actions;
export default userSlice.reducer;

// redux thunk

export const getAllUsers = (pageNumber) => {
  const alluser = async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://admin--portal.herokuapp.com/adminportal/users?page=${pageNumber}`
      );
      const result = await res.json();
      dispatch(setAllUsers(result.result));
      dispatch(setPageSize(result.total_pages));
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
  return alluser;
};

export const insertUsers = (data) => {
  console.log(data);
  const adduser = async (dispatch, getState) => {
    try {
      const res = await fetch(
        "https://admin--portal.herokuapp.com/adminportal/adduser/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await res.json();

      dispatch(setSaveData(result));
    } catch (error) {
      console.log(error);
    }
  };
  return adduser;
};

export const update_user = (user_id, user_data) => {
  const updateUser = async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://admin--portal.herokuapp.com/adminportal/users/${user_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user_data),
        }
      );
      const result = await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  return updateUser;
};

export const delete_user = (user_id) => {
  console.log(user_id);
  const deleteUser = async (dispatch, getState) => {
    try {
      const res = await fetch(
        `https://admin--portal.herokuapp.com/adminportal/users/${user_id}`,
        { method: "DELETE" }
      );
      const result = await res.json();
    } catch (error) {
      console.log(error);
    }
  };
  return deleteUser;
};
