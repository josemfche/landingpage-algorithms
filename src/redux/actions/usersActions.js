import { ActionsTypes } from "../types";

export const getUsers = (users) => {
  return {
    type: ActionsTypes.GET_USERS,
    payload: users,
  };
};
