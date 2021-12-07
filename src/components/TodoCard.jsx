import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Typography, Button } from "@mui/material";

export const TodoCard = ({ todo, render, setRender }) => {
  const { token } = useSelector((state) => state.account);

  const handleUpdate = (taskId) => {
    try {
      let taskName = prompt("Please enter your taks name");

      if (taskName) {
        axios
          .put(
            `${process.env.REACT_APP_BASE_URL}/todos/update`,
            {
              id: taskId,
              newName: taskName,
            },
            {
              headers: { Authorization: "Bearer " + token },
            }
          )
          .then((result) => {
            setRender(render + 1);
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (taskId) => {
    try {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/todos/delete/${taskId}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setRender(render + 1);
          console.log(result);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Typography align="center"> {todo.name}</Typography>
      <Button onClick={() => handleUpdate(todo._id)}> update</Button>
      <Typography variant="button" onClick={() => handleDelete(todo._id)}>
        ❌
      </Typography>
    </div>
  );
};
