import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionsTypes } from "../../redux/types";
import "../css/userscomponentscss/SingleUser.css";

const SingleUser = () => {
  const { singleUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <div className="user-container">
        <div className="user">
          <h2>User: {singleUser.name}</h2>
          <h3>User Data: </h3>
          <span>
            <strong>ID: </strong>
            {singleUser.id}
          </span>
          <span>
            <strong>Username: </strong>
            {singleUser.username}
          </span>
          <span>
            <strong>City: </strong>
            {singleUser.address.city}
          </span>
          <span>
            <strong>Zipcode: </strong>
            {singleUser.address.zipcode}
          </span>
          <span>
            <strong>lat: </strong>
            {singleUser.address.geo.lat}
          </span>
          <span>
            <strong>lng: </strong>
            {singleUser.address.geo.lng}
          </span>
          <span>
            <strong>Phone: </strong>
            {singleUser.phone}
          </span>
          <span>
            <strong>Company Name: </strong>
            {singleUser.company.name}
          </span>
          <div className="buttons-group">
            <button
              onClick={() =>
                dispatch({
                  type: ActionsTypes.CHANGE_ACTIVE_COMPONENT,
                  payload: {
                    editUser: false,
                    singleUser: false,
                    usersList: true,
                  },
                })
              }
              className="button-back"
            >
              Go Back to List
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ActionsTypes.CHANGE_ACTIVE_COMPONENT,
                  payload: {
                    editUser: true,
                    singleUser: false,
                    usersList: false,
                  },
                })
              }
              className="button-edit"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
