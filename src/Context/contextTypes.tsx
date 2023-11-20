export interface State {
  isMainMenuOpen: boolean;
  user: User;
}
export interface User {
  email: string;
  password: string;
}
export type Action =
  | { type: "OPEN_MAIN_MENU"; payload?: boolean }
  | { type: "GET_LOGIN_USER"; payload?: User };
