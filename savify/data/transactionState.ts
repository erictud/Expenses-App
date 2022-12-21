import { atom } from "recoil";
import { TransactionType } from "../types";

export const transactionsState = atom({
  key: "transactionsState",
  default: [] as TransactionType[],
});

export const expensesState = atom({
  key: "expensesState",
  default: [] as TransactionType[],
});

export const aqusitionsState = atom({
  key: "aqusitionsState",
  default: [] as TransactionType[],
});

export const kindOfTransaction = atom({
  key: "kindOfTransaction",
  default: "transactions",
});
