import { Action, State } from "./contextTypes";

//   : false, isSubMenuOpen;

export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN_MAIN_MENU":
      return { ...state, isMainMenuOpen: !state.isMainMenuOpen };
    case "GET_LOGIN_USER":
      return { ...state, user: action.payload };
    case "FETCH_USERS":
      return { ...state, users: action.payload };
    case "LOADING_FETCH_USERS":
      return { ...state, loadingUsers: action.payload };
    case "CHANGE_STATUS":
      return {
        ...state,
        users: state.users.map((user) => {
          return user.id === action.payload.id ? { ...user, status: action.payload.status } : user;
        }),
      };
    case "OPEN_USER_DETAILS":
      return {
        ...state,
        users: state.users.map((x) => ({
          ...x,
          optionOpen: x.id === action.payload ? !x.optionOpen : false,
        })),
      };
    case "CLOSE_USER_DETAILS":
      return {
        ...state,
        users: state.users.map((x) => (x.id === action.payload ? { ...x, optionOpen: false } : x)),
      };
    default:
      return state;
  }
};
