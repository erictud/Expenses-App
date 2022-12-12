"use client";

import { useState } from "react";
import AqusitionsIcon from "../../icons/AqusitionsIcon";
import ExpensesIcon from "../../icons/ExpensesIcon";
import styles from "./AddItemForm.module.css";
export default function AddItemForm() {
  const [typeOfTransaction, setTypeOfTransaction] = useState(false);
  // false = expense true = aquistion (income)

  return (
    <div className={styles["form-container"]}>
      <h1>Add an item</h1>
      <form className={styles.form}>
        <div className={styles["input-container"]}>
          <label htmlFor="name">Name of the aqusition</label>
          <input type="text" id="name" />
        </div>
        <div className={styles["type-container"]}>
          <h5 className={styles["label"]}>Type of transaction</h5>
          <div className={styles["type-row"]}>
            <div
              className={`${styles["type"]} ${!typeOfTransaction && styles.active}`}
              onClick={() => setTypeOfTransaction((prev) => !prev)}
            >
              <ExpensesIcon />
              <h4>Expense</h4>
            </div>
            <div
              className={`${styles["type"]} ${typeOfTransaction && styles.active}`}
              onClick={() => setTypeOfTransaction((prev) => !prev)}
            >
              <AqusitionsIcon />
              <h4>Aqusition</h4>
            </div>
          </div>
        </div>
        <div className={styles["amount-container"]}>
          <h5 className={styles["label"]}>Amount</h5>
          <div className={styles["container"]}>
            <span className={styles["number"]}>{typeOfTransaction ? "+" : "-"}</span>
            <input type="number" />
          </div>
        </div>
        <button className={styles["btn"]}>Add item</button>
      </form>
    </div>
  );
}
