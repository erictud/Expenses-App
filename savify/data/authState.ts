import { atom } from "recoil";
import { AuthStateType } from "../types";

export const authState = atom({
  key: "authState",
  default: {
    uid: "",
    state: true,
  },
});
