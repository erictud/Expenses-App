import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import styles from "./modal.module.css";

export default function Modal(props: { resetFunction: any; value: string }) {
  const { resetFunction, value } = props;
  const router = useRouter();

  return (
    <div>
      <div className={styles["overlay"]} onClick={resetFunction}></div>
      <div className={styles["modal-container"]}>
        <h2>Error</h2>
        <p>{value}</p>
        <button onClick={resetFunction}>Auth page</button>
      </div>
    </div>
  );
}
