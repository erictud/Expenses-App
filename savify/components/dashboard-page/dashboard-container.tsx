"use client";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../../data/authState";
import { aqusitionsState, expensesState } from "../../data/transactionState";
import { db } from "../../firebase";
import { TransactionType } from "../../types";
import Spinner from "../layout/spinner";
import AddItemButton from "./add-item-btn";
import ButtonsRow from "./buttons-row";
import TransactionsList from "./TransactionsList";

export default function Container() {
  const [loading, setIsLoading] = useState(true);
  const [uid, _] = useRecoilState(authState);
  const [__, setAqusitionsList] = useRecoilState(aqusitionsState);
  const [___, setExpensesList] = useRecoilState(expensesState);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      console.log(uid);
      onSnapshot(query(collection(db, "users", uid, "aqusition")), (snapshot) => {
        const newArr = [] as TransactionType[];
        snapshot.docs.forEach((doc) => {
          const obj = {
            name: doc.data().name,
            date: doc.data().date,
            amount: doc.data().amount,
            type: "aqusition",
          };
          newArr.push(obj);
        });
        setAqusitionsList(newArr);
      });
      onSnapshot(query(collection(db, "users", uid, "expense")), (snapshot) => {
        const newArr = [] as TransactionType[];
        snapshot.docs.forEach((doc) => {
          const obj = {
            name: doc.data().name,
            date: doc.data().date,
            amount: doc.data().amount,
            type: "expense",
          };
          newArr.push(obj);
        });
        setExpensesList(newArr);
      });
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
          <p style={{ fontSize: "20px", textAlign: "center", marginLeft: "4rem" }}>
            Fetching items
          </p>
        </div>
      ) : (
        <>
          <ButtonsRow />
          <TransactionsList />
          <AddItemButton />
        </>
      )}
    </>
  );
}
