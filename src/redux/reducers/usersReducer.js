import { ActionsTypes } from "../types";

const initialState = {
  activeComponent: {
    editUser: false,
    singleUser: false,
    usersList: true,
  },
  users: [],
  singleUser: {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
};

const updateUser = (state, payload) => {
  const newState = state.map((user) => {
    if (user.id == payload.id) {
      return (user = payload);
    } else {
      return user;
    }
  });
  return newState;
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionsTypes.GET_USERS:
      return { ...state, users: payload };
    case ActionsTypes.DELETE_USER:
      return { ...state, users: payload };
    case ActionsTypes.EDIT_USER:
      const newUsers = updateUser(state.users, payload);
      return { ...state, users: newUsers, singleUser: payload };
    case ActionsTypes.SET_SINGLE_USER:
      const newUser = state.users.filter((item) => item.id == payload);
      return { ...state, singleUser: newUser[0] };
    case ActionsTypes.CHANGE_ACTIVE_COMPONENT:
      return { ...state, activeComponent: payload };
    default:
      return state;
  }
};
