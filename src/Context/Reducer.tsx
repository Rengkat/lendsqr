import { Action, State } from "./contextTypes";

//   : false, isSubMenuOpen;

export const Reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "OPEN_MAIN_MENU":
      return { ...state, isMainMenuOpen: !state.isMainMenuOpen };
    case "GET_LOGIN_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
