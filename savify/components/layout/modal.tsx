import styles from "./modal.module.css";

export default function Modal(props: { resetFunction: any; value: string; btnVal: string }) {
  const { resetFunction, value, btnVal } = props;

  return (
    <div>
      <div className={styles["overlay"]} onClick={resetFunction}></div>
      <div className={styles["modal-container"]}>
        <h2>Error</h2>
        <p>{value}</p>
        <button onClick={resetFunction}>{btnVal}</button>
      </div>
    </div>
  );
}
