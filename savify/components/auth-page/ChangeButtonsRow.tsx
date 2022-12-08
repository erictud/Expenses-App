import { MouseEventHandler } from "react";
import styles from "./ChangeButtonsRow.module.css";

interface Props {
  value: boolean;
  updateState: MouseEventHandler<HTMLButtonElement>;
}

export default function ChangeButtonsRow(props: Props) {
  const { value, updateState } = props;

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <button className={`${!value && styles.active}`} onClick={updateState}>
          Sign Up
        </button>
        <button className={`${value && styles.active}`} onClick={updateState}>
          Sign In
        </button>
      </div>
    </div>
  );
}
