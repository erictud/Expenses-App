import styles from "./TransactionItem.module.css";
import AmountIcon from "../../icons/AmountIcon";
import CalendarIcon from "../../icons/CalendarIcon";
import ExpensesItemIcon from "../../icons/ExpensesItemIcon";
import AqusitionItemIcon from "../../icons/AqusitionItemIcon";

interface Props {
  itemName: string;
  date: string;
  type: string;
  amount: number;
}

export default function TransactionItem(props: Props) {
  const { itemName, date, amount, type } = props;
  return (
    <div className={styles.item}>
      <div className={`${styles["svg"]} ${type === "expense" ? styles.expense : styles.aqusition}`}>
        {type === "expense" ? <ExpensesItemIcon /> : <AqusitionItemIcon />}
        <h4 className={styles.amount}>{amount}</h4>
      </div>
      <div className={styles.column}>
        <h5 className={styles["name"]}>{itemName}</h5>
        <h5 className={styles["date"]}>
          <CalendarIcon />
          {new Date(date).toLocaleString("en", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </h5>
      </div>
    </div>
  );
}
