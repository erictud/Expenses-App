"use client";

import { useRecoilState } from "recoil";
import { kindOfTransaction } from "../../data/transactionState";
import AllTransactionsIcon from "../../icons/AllTransactionsIcon";
import AqusitionsIcon from "../../icons/AqusitionsIcon";
import ExpensesIcon from "../../icons/ExpensesIcon";
import styles from "./buttons-row.module.css";

export default function ButtonsRow() {
  const [transactions, setTransactions] = useRecoilState(kindOfTransaction);

  return (
    <div className={styles["row"]}>
      <button
        className={`${styles["btn"]} ${transactions === "transactions" && styles.active}`}
        onClick={() => setTransactions("transactions")}
      >
        <div className={styles["svg"]}>
          <AllTransactionsIcon />
        </div>
        All transcations
      </button>
      <button
        className={`${styles["btn"]} ${transactions === "expenses" && styles.active}`}
        onClick={() => setTransactions("expenses")}
      >
        <div className={styles["svg"]}>
          <ExpensesIcon />
        </div>
        Expenses
      </button>
      <button
        className={`${styles["btn"]} ${transactions === "aqusitions" && styles.active}`}
        onClick={() => setTransactions("aqusitions")}
      >
        <div className={styles["svg"]}>
          <AqusitionsIcon />
        </div>
        Aqusitions
      </button>
    </div>
  );
}
