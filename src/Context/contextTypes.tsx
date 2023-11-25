import { UserType } from "../Constants/constants";

export interface State {
  isMainMenuOpen: boolean;
  user: User;
  users: UserType[];
  loadingUsers: false;
}
export interface User {
  email: string;
  password: string;
}
interface ChangeStatusAction {
  type: "CHANGE_STATUS";
  payload: {
    id: string;
    status: string;
  };
}
export type Action =
  | { type: "OPEN_MAIN_MENU"; payload?: boolean }
  | { type: "GET_LOGIN_USER"; payload?: User }
  | { type: "CHANGE_STATUS"; payload?: any }
  | { type: "FETCH_USERS"; payload?: UserType[] }
  | { type: "LOADING_FETCH_USERS"; payload?: boolean }
  | { type: "OPEN_USER_DETAILS"; payload?: string }
  | { type: "CLOSE_USER_DETAILS"; payload?: string }
  | { type: "ACTIVATE"; payload?: string };
