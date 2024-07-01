import { makeAutoObservable } from "mobx";
import { IUser } from "../model/IUser";
import { AuthStoreState } from "./types";
import signStore from "./signStore";

export class AuthStore {
  state: AuthStoreState = {
    isAuth: false,
    user: {} as IUser,
    isLoading: false,
    error: '',
  }

  constructor() {
    makeAutoObservable(this);
  }

  setAuth = (auth: boolean) => {
    this.state.isAuth = auth;
  }

  setUser = (user: IUser) => {
    this.state.user = user;
  }

  setIsLoading = (loading: boolean) => {
    this.state.isLoading = loading;
  }

  setError = (error: string) => {
    this.state.error = error;
  }

  login = async (email: string, password: string) => {
    try {
      this.setIsLoading(true);
      this.setAuth(true);
      await signStore.handleLogin(email, password);
      this.setUser(signStore.state);

      if (this.state.user) {
        localStorage.setItem('auth', 'username');
        localStorage.setItem('email', 'email');
      } else {
        this.setError('Incorrect data');
      }
    } catch (e) {
      this.setError('Incorrect data');
    } finally {
      this.setIsLoading(false);
    }
  }

  signUp = async (email: string, password: string) => {
    try {
      this.setIsLoading(true);
      this.setAuth(true);
      await signStore.handleRegister(email, password);
      this.setUser(signStore.state)

      if (this.state.user) {
        localStorage.setItem('auth', 'username');
        localStorage.setItem('email', 'email');
      } else {
        this.setError('Incorrect data');
      }
    } catch (e) {
      this.setError('Incorrect data');
    } finally {
      this.setIsLoading(false);
    }
  }

  logout = async () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    this.setUser({} as IUser);
    this.setAuth(false);
  }
}

export default new AuthStore();