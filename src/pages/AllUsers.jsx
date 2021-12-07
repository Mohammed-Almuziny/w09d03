import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Container } from "@mui/material";

import { UserCard } from "./../components/UserCard";
import { setUsers } from "./../reducers/users";

export const AllUsers = () => {
  const [render, setRender] = useState(0);

  const token = useSelector((state) => state.account.token);
  const usersList = useSelector((state) => state.users.usersList);

  const dispatch = useDispatch();

  const getTodos = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_BASE_URL}/allUsers`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((result) => {
          dispatch(setUsers({ usersList: result.data }));
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
      {usersList.map((user) => (
        <UserCard
          user={user}
          render={render}
          setRender={setRender}
          key={user._id}
        />
      ))}
    </Container>
  );
};
