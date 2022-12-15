"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../../data/authState";
import AqusitionsIcon from "../../icons/AqusitionsIcon";
import ErrorIcon from "../../icons/ErrorIcon";
import ExpensesIcon from "../../icons/ExpensesIcon";
import Spinner from "../layout/spinner";
import styles from "./AddItemForm.module.css";
export default function AddItemForm() {
  const [authStateVal, _] = useRecoilState(authState);
  const [typeOfTransaction, setTypeOfTransaction] = useState(false);
  const [nameOfAqusition, setNameOfAqusition] = useState<string>("");
  const [aqusitionAmount, setAqusitionAmount] = useState<number>(0);
  const [nameError, setNameError] = useState<string>("");
  const [amountError, setAmountError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // false = expense true = aquistion (income)
  const router = useRouter();

  async function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    let type;
    if (typeOfTransaction === false) type = "expense";
    else type = "aqusition";
    if (nameOfAqusition.trim().length === 0) {
      setNameError("Invalid name of the aqusition");
      return;
    } else setNameError("");

    if (typeof aqusitionAmount !== "number") {
      setAmountError("Invalid amount of the aqusition");
      return;
    } else setAmountError("");

    const req = await fetch("/api/add-item", {
      method: "POST",
      body: JSON.stringify({
        aqusitionName: nameOfAqusition,
        aqusitionAmount,
        uid: authStateVal,
        typeOfAqusition: type,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!req.ok) {
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    router.push("/");
  }

  return (
    <div className={styles["form-container"]}>
      <h1>Add an item</h1>
      <form className={styles.form} onSubmit={submitForm}>
        <div className={styles["input-container"]}>
          <label htmlFor="name">Name of the aqusition</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setNameOfAqusition(e.currentTarget.value)}
          />
          {nameError && (
            <div className={styles["error-container"]}>
              <ErrorIcon />
              <span className={styles["error"]}>{nameError}</span>
            </div>
          )}
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
            <input type="number" onChange={(e) => setAqusitionAmount(+e.currentTarget.value)} />
          </div>
          {amountError && (
            <div className={styles["error-container"]}>
              <ErrorIcon />
              <span className={styles["error"]}>{amountError}</span>
            </div>
          )}
        </div>
        <button className={styles["btn"]}>{!isLoading ? "Add item" : <Spinner />}</button>
      </form>
    </div>
  );
}
