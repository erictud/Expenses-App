import { atom } from "recoil";

export interface AuthStateInterface {
  uid: string;
  state: boolean;
}

export const authState = atom<AuthStateInterface>({
  key: "authState",
  default: {
    uid: "",
    state: true,
  },
});
