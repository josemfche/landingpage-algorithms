import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ActionsTypes } from "../../redux/types";
import "../css/userscomponentscss/UsersList.css";

const UsersList = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  /*   useEffect(() => {
    getUsers();
  }); */

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({ type: ActionsTypes.GET_USERS, payload: res.data }))
      .catch((err) => console.error(err));
  };

  const setSingleUser = (id) => {
    dispatch({ type: ActionsTypes.SET_SINGLE_USER, payload: id });
    dispatch({
      type: ActionsTypes.CHANGE_ACTIVE_COMPONENT,
      payload: {
        editUser: false,
        singleUser: true,
        usersList: false,
      },
    });
  };
  const editSingleUser = (id) => {
    dispatch({ type: ActionsTypes.SET_SINGLE_USER, payload: id });
    dispatch({
      type: ActionsTypes.CHANGE_ACTIVE_COMPONENT,
      payload: {
        editUser: true,
        singleUser: false,
        usersList: false,
      },
    });
  };

  const deleteUser = (id) => {
    const userRemoved = users.filter((user) => user.id != id);
    console.log(userRemoved);
    dispatch({ type: ActionsTypes.DELETE_USER, payload: userRemoved });
  };

  return (
    <>
      <>
        <div className="list-container">
          <button className="fetch-button" onClick={getUsers}>
            Fetch users
          </button>
          {users.map((user) => (
            <div className="item-list">
              <div className="user-data">
                <h5>Name: </h5>
                <div>{user.name}</div>
              </div>
              <div className="user-data">
                <h5>Username: </h5>
                <div>{user.username}</div>
              </div>
              <div className="user-data">
                <h5>Email: </h5>
                <div>{user.email}</div>
              </div>
              <div className="user-data">
                <h5>Phone: </h5>
                <div>{user.phone}</div>
              </div>
              <div className="buttons">
                {" "}
                <button onClick={() => setSingleUser(user.id)} className="button-view">
                  View
                </button>
                <button onClick={() => editSingleUser(user.id)} className="button-edit">
                  Edit
                </button>
                <button onClick={() => deleteUser(user.id)} className="button-delete">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
      <></>
    </>
  );
};

export default UsersList;
