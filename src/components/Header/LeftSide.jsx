import React from "react";
import { useSelector } from "react-redux";
import { Link } from "@mui/material";

export const LeftSide = () => {
  const { role } = useSelector((state) => state.account);

  return role === "admin" ? (
    <>
      <Link color="inherit" underline="none" href="/" mr={2}>
        home
      </Link>
      <Link color="inherit" underline="none" href="/todos" mr={2}>
        todos
      </Link>
      <Link color="inherit" underline="none" href="/allTodos" mr={2}>
        all todos
      </Link>
      <Link color="inherit" underline="none" href="/allUsers" mr={2}>
        all users
      </Link>
    </>
  ) : (
    <>
      <Link color="inherit" underline="none" href="/" mr={2}>
        home
      </Link>
      <Link color="inherit" underline="none" href="/todos" mr={2}>
        todos
      </Link>
    </>
  );
};
