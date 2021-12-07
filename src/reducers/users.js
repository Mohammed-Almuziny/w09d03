const instiaiState = {
  usersList: [],
};

const users = (state = instiaiState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET":
      const { usersList } = payload;
      return { usersList };
    default:
      return state;
  }
};

export default users;

export const setUsers = (data) => {
  return {
    type: "SET",
    payload: data,
  };
};
