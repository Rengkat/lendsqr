import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";
import { Action, State, User } from "./contextTypes";
import { addUserToLocalStorage, getUserFromLocalStorage } from "./LocalStorage";
import { useEffect } from "react";
import { UserType } from "../Constants/constants";

interface Props {
  children: React.ReactNode;
}
export interface AppState extends State {
  openMainNav: () => void;
  getLoginUser: (user: User) => void;
  openDetail: (id: string) => void;
  changeUserStatus: (detail: UserType, newStatus: string) => void;
  closeDetail: (id: string) => void;
}
const initialState: State = {
  isMainMenuOpen: false,
  user: getUserFromLocalStorage(),
  users: [],
  loadingUsers: false,
};
export const AppContext = createContext<AppState>({} as AppState);
const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    Reducer as React.Reducer<State, Action>,
    initialState
  );

  const openMainNav = () => {
    dispatch({ type: "OPEN_MAIN_MENU" });
  };
  // get user
  const getLoginUser = (user: User) => {
    addUserToLocalStorage(user);
    dispatch({ type: "GET_LOGIN_USER", payload: user });
  };
  // fetch data and some missing data
  useEffect(() => {
    const getUsers = async () => {
      dispatch({ type: "LOADING_FETCH_USERS", payload: true });
      try {
        const data = await fetch(
          "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
        );
        const res = await data.json();
        const modifiedData = res.map((user: User) => {
          return { ...user, status: "active", optionOpen: false };
        });
        dispatch({ type: "FETCH_USERS", payload: modifiedData });
        dispatch({ type: "LOADING_FETCH_USERS", payload: false });
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);
  // opening option popup
  const openDetail = (id: string) => {
    dispatch({ type: "OPEN_USER_DETAILS", payload: id });
  };
  // closing the popup
  const closeDetail = (id: string) => {
    dispatch({ type: "CLOSE_USER_DETAILS", payload: id });
  };
  //Put the status if not in the database, but is in, then change it
  const changeUserStatus = async (detail: UserType, newStatus: string) => {
    try {
      const res = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${detail.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );

      if (res.ok) {
        console.log("User activated successfully");
        // Update state or perform other actions
      } else {
        console.error("Failed to activate user. Status:", res.statusText);
      }
    } catch (error) {
      console.error("Error activating user:", error);
    }
    // to change the status locally
    dispatch({
      type: "CHANGE_STATUS",
      payload: {
        id: detail.id,
        status: newStatus,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        openMainNav,
        getLoginUser,
        openDetail,
        closeDetail,
        changeUserStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
