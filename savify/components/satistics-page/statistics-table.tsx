import AllTransactionsIcon from "../../icons/AllTransactionsIcon";
import AqusitionsIcon from "../../icons/AqusitionsIcon";
import ExpensesIcon from "../../icons/ExpensesIcon";
import { TransactionType } from "../../types";
import styles from "./statistics-table.module.css";

export default function StatisticsTable(props: {
  expensesList: TransactionType[];
  revenuesList: TransactionType[];
  year: number;
}) {
  const { expensesList, revenuesList } = props;
  const now = new Date();

  return (
    <div>
      <h3 className={styles["title"]}>Current month</h3>
      <div className={styles["statistics-table"]}>
        <div className={styles["type"]}>
          <AqusitionsIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Revenue</p>
            <p className={styles["total"]}>
              {revenuesList
                .filter((el) => new Date(el.date).getMonth() === now.getMonth())
                .reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
        <div className={styles["type"]}>
          <ExpensesIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Expenses</p>
            <p className={styles["total"]}>
              -
              {expensesList
                .filter((el) => new Date(el.date).getMonth() === now.getMonth())
                .reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
        <div className={styles["type"]}>
          <AllTransactionsIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Balance</p>
            <p className={styles["total"]}>
              {revenuesList
                .filter((el) => new Date(el.date).getMonth() === now.getMonth())
                .reduce((acc, el) => acc + el.amount, 0) -
                expensesList
                  .filter((el) => new Date(el.date).getMonth() === now.getMonth())
                  .reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
      </div>
      <h3 className={styles["title"]}>Current year</h3>
      <div className={styles["statistics-table"]}>
        <div className={styles["type"]}>
          <AqusitionsIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Revenue</p>
            <p className={styles["total"]}>
              {revenuesList
                .filter((el) => new Date(el.date).getFullYear() === now.getFullYear())
                .reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
        <div className={styles["type"]}>
          <ExpensesIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Expenses</p>
            <p className={styles["total"]}>
              -
              {expensesList
                .filter((el) => new Date(el.date).getFullYear() === now.getFullYear())
                .reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
        <div className={styles["type"]}>
          <AllTransactionsIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Balance</p>
            <p className={styles["total"]}>
              {revenuesList
                .filter((el) => new Date(el.date).getFullYear() === now.getFullYear())
                .reduce((acc, el) => acc + el.amount, 0) -
                expensesList
                  .filter((el) => new Date(el.date).getMonth() === now.getMonth())
                  .reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
      </div>
      <h3 className={styles["title"]}>Overall </h3>
      <div className={styles["statistics-table"]}>
        <div className={styles["type"]}>
          <AqusitionsIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Revenue</p>
            <p className={styles["total"]}>
              {revenuesList.reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
        <div className={styles["type"]}>
          <ExpensesIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Expenses</p>
            <p className={styles["total"]}>
              -{expensesList.reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
        <div className={styles["type"]}>
          <AllTransactionsIcon />
          <div className={styles["info-container"]}>
            <p className={styles["quality"]}>Balance</p>
            <p className={styles["total"]}>
              {revenuesList.reduce((acc, el) => acc + el.amount, 0) -
                expensesList.reduce((acc, el) => acc + el.amount, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
