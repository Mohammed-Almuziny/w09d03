import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Typography } from "@mui/material";

export const UserCard = ({ user, render, setRender }) => {
  const token = useSelector((state) => state.account.token);

  const handleDelete = (userId) => {
    try {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/users/${userId}`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          setRender(render + 1);
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
      <Typography align="center"> {user.email}</Typography>
      <Typography variant="button" onClick={() => handleDelete(user._id)}>
        ❌
      </Typography>
    </div>
  );
};
