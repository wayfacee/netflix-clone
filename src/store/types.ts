import { IUser } from "../model/IUser";

export interface AuthStoreState {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
}

export interface SignStoreState {
  email: null | string;
  token: null | string;
  id: null | number;
}