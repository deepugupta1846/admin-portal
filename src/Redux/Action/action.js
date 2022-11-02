export const addUser = (userdata) => {
  return {
    type: "ADD_USER",
    data: {
      id: new Date().getTime().toString(),
      first_name: userdata.first_name,
      last_name: userdata.last_name,
      username: userdata.user_name,
      password: userdata.password,
      address: userdata.address,
      gender: userdata.gender,
      status: userdata.status,
    },
  };
};

export const delete_user = (id) => {
  return {
    type: "DELETE_USER",
    id,
  };
};

export const update_user = (id, userdata) => {
  return {
    type: "UPDATE_USER",
    id,
    data: {
      first_name: userdata.first_name,
      last_name: userdata.last_name,
      user_name: userdata.user_name,
      password: userdata.password,
      address: userdata.address,
      gender: userdata.gender,
      status: userdata.status,
    },
  };
};

export const authenticate = (username, password) => {
  return {
    type: "LOGIN",
    data: {
      username: username,
      password: password,
    },
  };
};
