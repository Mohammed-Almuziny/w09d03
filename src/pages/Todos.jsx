import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Container, Typography } from "@mui/material";

import { TodoCard } from "./../components/TodoCard";
import { AddTodo } from "./../components/AddTodo";
import { set } from "./../reducers/tasks";

export const Todos = () => {
  const [render, setRender] = useState(0);

  const { user, token } = useSelector((state) => state.account);
  const todos = useSelector((state) => state.tasks.todos);

  const dispatch = useDispatch();

  const getTodos = () => {
    try {
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/todos`, {
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
    console.log(render);
    getTodos();
  }, [render]);

  return user ? (
    <Container>
      {todos.map((todo) => (
        <TodoCard
          todo={todo}
          render={render}
          setRender={setRender}
          key={todo._id}
        />
      ))}
      <AddTodo render={render} setRender={setRender} />
    </Container>
  ) : (
    <Typography>you have to log in</Typography>
  );
};
