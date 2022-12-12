import { atom } from "recoil";

export const transactionsState = atom({
  key: "transactionsState",
  default: [
    { itemName: "Chips", amount: 20, date: "12/9/2022", type: "expense" },
    { itemName: "Choclate", amount: 10, date: "12/8/2022", type: "expense" },
    { itemName: "Salary", amount: 200, date: "11/9/2022", type: "aqusition" },
    { itemName: "Tip from mom", amount: 150, date: "11/9/2022", type: "aqusition" },
    { itemName: "Apple", amount: 2, date: "12/9/2022", type: "expense" },
    { itemName: "Oranges", amount: 5, date: "12/9/2022", type: "expense" },
    { itemName: "TV", amount: 500, date: "12/9/2022", type: "expense" },
  ],
});

export const expensesState = atom({
  key: "expensesState",
  default: [
    { itemName: "Chips", amount: 20, date: "12/9/2022", type: "expense" },
    { itemName: "Choclate", amount: 10, date: "12/8/2022", type: "expense" },
    { itemName: "Apple", amount: 2, date: "12/9/2022", type: "expense" },
    { itemName: "Oranges", amount: 5, date: "12/9/2022", type: "expense" },
    { itemName: "TV", amount: 500, date: "12/9/2022", type: "expense" },
  ],
});

export const aqusitionsState = atom({
  key: "aqusitionsState",
  default: [
    { itemName: "Salary", amount: 200, date: "11/9/2022", type: "aqusition" },
    { itemName: "Tip from mom", amount: 150, date: "11/9/2022", type: "aqusition" },
  ],
});

export const kindOfTransaction = atom({
  key: "kindOfTransaction",
  default: "transactions",
});
