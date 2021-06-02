import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionsTypes } from "../../redux/types";
import "../css/userscomponentscss/EditUser.css";

const EditUser = () => {
  const { singleUser } = useSelector((state) => state.users);
  const [userData, setUserData] = useState(singleUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setUserData(singleUser);
  }, [singleUser]);

  const onChange = (e) => {
    e.preventDefault();
    if (e.target.name === "city" || e.target.name === "zipcode") {
      setUserData({ ...userData, address: { ...userData.address, [e.target.name]: e.target.value } });
    } else if (e.target.name === "lat" || e.target.name === "lng") {
      setUserData({ ...userData, address: { ...userData.address, geo: { ...userData.address.geo, [e.target.name]: e.target.value } } });
    } else if (e.target.name === "name") {
      setUserData({ ...userData, company: { ...userData.company, [e.target.name]: e.target.value } });
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    console.log(userData);
  };

  const saveUser = (userData) => {
    dispatch({ type: ActionsTypes.EDIT_USER, payload: userData });
    dispatch({
      type: ActionsTypes.CHANGE_ACTIVE_COMPONENT,
      payload: {
        editUser: false,
        singleUser: true,
        usersList: false,
      },
    });
  };

  return (
    <>
      <div className="userform-container">
        <div className="userform">
          <h2>User: {singleUser.name}</h2>
          <h3>User Data: </h3>
          <span>
            <strong>ID: </strong>
            <input onChange={onChange} name={"id"} value={userData.id} disabled />
          </span>
          <span>
            <strong>Username: </strong>
            <input onChange={onChange} name={"username"} value={userData.username} />
          </span>
          <span>
            <strong>City: </strong>
            <input onChange={onChange} name={"city"} value={userData.address.city} />
          </span>
          <span>
            <strong>Zipcode: </strong>
            <input onChange={onChange} name={"zipcode"} value={userData.address.zipcode} />
          </span>
          <span>
            <strong>lat: </strong>
            <input onChange={onChange} name={"lat"} value={userData.address.geo.lat} />
          </span>
          <span>
            <strong>lng: </strong>
            <input onChange={onChange} name={"lng"} value={userData.address.geo.lng} />
          </span>
          <span>
            <strong>Phone: </strong>
            <input onChange={onChange} name={"phone"} value={userData.phone} />
          </span>
          <span>
            <strong>Company Name: </strong>
            <input onChange={onChange} name={"name"} value={userData.company.name} />
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
            <button onClick={() => saveUser(userData)} className="button-save">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
