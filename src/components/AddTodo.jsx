import { React, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { TextField, Button } from "@mui/material";

export const AddTodo = ({ render, setRender }) => {
  const [addMore, setAddMore] = useState(false);
  const [taskName, setTaskName] = useState();

  const { token } = useSelector((state) => state.account);

  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      axios
        .post(
          `${process.env.REACT_APP_BASE_URL}/todos/create`,
          {
            name: taskName,
          },
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((result) => {
          setAddMore(false);
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

  return addMore ? (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={(e) => setTaskName(e.target.value)}
        id="userName"
        label="userName"
        placeholder="userName"
        margin="normal"
        required
      />
      <Button type="submit"> add </Button>
      <Button onClick={() => setAddMore(false)}> cancel</Button>
    </form>
  ) : (
    <Button onClick={() => setAddMore(true)}>addmore</Button>
  );
};
