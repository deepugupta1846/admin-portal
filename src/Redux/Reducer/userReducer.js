import { userData } from "../../Data/usersData";
const initialData = {
  users: userData,
};
export const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_USER":
      const userData = action.data;
      console.log(userData);
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            user_name: userData.username,
            password: userData.password,
            address: userData.address,
            gender: userData.gender,
            status: userData.status,
          },
        ],
      };
    case "UPDATE_USER":
      const id = action.id;
      const userdata = action.data;
      console.log(userdata);
      const alluserdata = state.users;
      let currentIndex = 0;

      const udata = state.users.filter((data, index) => {
        if (data.id == id) {
          currentIndex = index;
          return data;
        }
      });
      console.log(currentIndex);
      const remainsdata = state.users.filter((data) => data.id != id);
      const currentdata = alluserdata[currentIndex];
      alluserdata[currentIndex].first_name = userdata.first_name;
      alluserdata[currentIndex].last_name = userdata.last_name;
      alluserdata[currentIndex].user_name = userdata.user_name;
      alluserdata[currentIndex].password = userdata.password;
      alluserdata[currentIndex].address = userdata.address;
      alluserdata[currentIndex].gender = userdata.gender;
      alluserdata[currentIndex].status = userdata.status;
      console.log(alluserdata);
      return {
        ...state,
        users: [...alluserdata],
      };
    case "DELETE_USER":
      const deleteid = action.id;
      const remainsData = state.users.filter((user) => user.id !== deleteid);
      return {
        ...state,
        users: [...remainsData],
      };
    default:
      return state;
  }
};
