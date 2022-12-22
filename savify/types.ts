export interface AuthStateType {
  uid: string;
  state: boolean;
}

export interface TransactionType {
  name: string;
  date: string;
  amount: number;
  type: string;
}
