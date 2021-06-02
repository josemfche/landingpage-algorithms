import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditUser from "./EditUser";
import SingleUser from "./SingleUser";
import UsersList from "./UsersList";

const Users = () => {
  const { activeComponent } = useSelector((state) => state.users);

  if (activeComponent.usersList === true) {
    return <UsersList />;
  } else if (activeComponent.editUser === true) {
    return <EditUser />;
  } else if (activeComponent.singleUser === true) {
    return <SingleUser />;
  }
};

export default Users;
