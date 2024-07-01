import { makeAutoObservable } from "mobx"
import { SignStoreState } from "./types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

class SignStore {
  state: SignStoreState = {
    email: null,
    token: null,
    id: null,
  }

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (email: string | null, token: string | null, id: number | null) => {
    this.state.email = email;
    this.state.token = token;
    this.state.id = id;
  }

  removeUser = () => {
    this.state.email = null;
    this.state.token = null;
    this.state.id = null;
  }

  handleLogin = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.getIdToken();
      this.setUser(user.email, token, Number(user.uid));
    } catch (e) {
      console.error("handleLogin:", e);
    }
  }

  handleRegister = async (email: string, password: string) => {
    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const token = await user.getIdToken();
      this.setUser(user.email, token, Number(user.uid));
    } catch (e) {
      console.error("handleRegister:", e);
    }
  }
}

export default new SignStore();