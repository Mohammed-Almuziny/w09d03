const instiaiState = {
  todos: [],
};

const tasks = (state = instiaiState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET":
      const { todos } = payload;
      return { todos };
    default:
      return state;
  }
};

export default tasks;

export const set = (data) => {
  return {
    type: "SET",
    payload: data,
  };
};
