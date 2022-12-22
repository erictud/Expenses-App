import styles from "./loading-modal.module.css";
import Spinner from "./spinner";

export default function LoadingModal(props: { value: string }) {
  const { value } = props;

  return (
    <div>
      <div className={styles["overlay"]}></div>
      <div className={styles["modal-container"]}>
        <div className={styles["lds-facebook"]}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>{value}</p>
      </div>
    </div>
  );
}
