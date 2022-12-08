import ErrorIcon from "../../../icons/ErrorIcon";
import PasswordInput from "../PasswordInput";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles["signup-form"]}>
      <h2>Log in</h2>
      <form className={styles.form}>
        <div className={styles["input-container"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
          <div className={styles["error-container"]}>
            <ErrorIcon />
            <span className={styles["error"]}>Error!</span>
          </div>
        </div>
        <PasswordInput />
        <button>Log in</button>
      </form>
      <p>
        Fogot the password? <a href="/">Reset it</a>
      </p>
    </div>
  );
}
