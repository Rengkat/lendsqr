import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
import { Action, State, User } from "./contextTypes";
import { getUserFromLocalStorage } from "./LocalStorage";

interface Props {
  children: React.ReactNode;
}
export interface AppState extends State {
  openMainNav: () => void;
  getLoginUser: (user: User) => void;
}
const initialState: State = {
  isMainMenuOpen: true,
  user: getUserFromLocalStorage(),
};
export const AppContext = createContext<AppState>({} as AppState);
const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducer as React.Reducer<State, Action>, initialState);

  const openMainNav = () => {
    dispatch({ type: "OPEN_MAIN_MENU" });
  };
  const getLoginUser = (user: User) => {
    dispatch({ type: "GET_LOGIN_USER", payload: user });
  };
  return (
    <AppContext.Provider value={{ ...state, openMainNav, getLoginUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
