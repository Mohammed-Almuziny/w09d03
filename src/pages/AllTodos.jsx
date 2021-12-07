import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Container } from "@mui/material";

import { TodoCard } from "./../components/TodoCard";
import { set } from "./../reducers/tasks";

export const AllTodos = () => {
  const [render, setRender] = useState(0);

  const token = useSelector((state) => state.account.token);
  const todos = useSelector((state) => state.tasks.todos);

  const dispatch = useDispatch();

  const getTodos = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/todos/alltodos`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          dispatch(set({ todos: result.data }));
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (token) getTodos();
  }, []);

  useEffect(() => {
    getTodos();
  }, [render]);

  return (
    <Container>
      {todos.map((todo) => (
        <TodoCard
          token={token}
          todo={todo}
          render={render}
          setRender={setRender}
          key={todo._id}
        />
      ))}
    </Container>
  );
};
