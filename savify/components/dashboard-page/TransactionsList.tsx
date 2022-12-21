import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  kindOfTransaction,
  expensesState,
  aqusitionsState,
  transactionsState,
} from "../../data/transactionState";
import TransactionItem from "../Transaction/TransactionItem";
import styles from "./TransactionsList.module.css";

export default function TransactionsList() {
  const [typeOfTransaction, _] = useRecoilState(kindOfTransaction);
  const [expensesList, __] = useRecoilState(expensesState);
  const [aqusitionsList, ___] = useRecoilState(aqusitionsState);
  const [transactionList, ____] = useRecoilState(transactionsState);
  const [list, setList] = useState([...expensesList, ...aqusitionsList]);
  console.log(aqusitionsList);
  useEffect(() => {
    if (typeOfTransaction === "expenses") setList(expensesList);
    if (typeOfTransaction === "aqusitions") setList(aqusitionsList);
    if (typeOfTransaction === "transactions") setList([...expensesList, ...aqusitionsList]);
  }, [typeOfTransaction, expensesList, aqusitionsList, transactionList]);
  return (
    <div className={styles["container"]}>
      <h3 className={styles["title"]}>Your {typeOfTransaction}:</h3>
      <ul className={styles["transactions-list"]}>
        {list.length > 0 ? (
          list.map((el, i) => (
            <TransactionItem
              key={i}
              date={el.date}
              itemName={el.name}
              amount={+el.amount}
              type={el.type}
            />
          ))
        ) : (
          <p className={styles.text}>No {typeOfTransaction} yet!</p>
        )}
      </ul>
    </div>
  );
}
