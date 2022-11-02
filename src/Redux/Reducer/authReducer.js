import { adminData } from "../../Data/adminData";
const initialData = {
  admindata: adminData,
  message: "",
  login: false,
};
export const authReducer = (state = initialData, action) => {
  switch (action.type) {
    case "LOGIN":
      const data = state.admindata;
      const validateUser = data.filter(
        (d) => d.user_name == action.data.username
      );
      console.log(validateUser);
      if (validateUser.length > 0) {
        localStorage.setItem("username", validateUser[0].user_name);
        return {
          ...state,
          login: true,
          message: "success",
        };
      } else return state;
    default:
      return state;
  }
};
