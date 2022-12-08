import ErrorIcon from "../../../icons/ErrorIcon";
import PasswordInput from "../PasswordInput";
import styles from "./SignupForm.module.css";
export default function SigninForm() {
  return (
    <div className={styles["signup-form"]}>
      <h2>Join Savify</h2>
      <form className={styles.form}>
        <div className={styles["input-row"]}>
          <div className={styles["input-container"]}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" />
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="secondRow">Second Name</label>
            <input type="text" id="secondRow" />
          </div>
        </div>
        <div className={styles["input-container"]}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
          <div className={styles["error-container"]}>
            <ErrorIcon />
            <span className={styles["error"]}>Error!</span>
          </div>
        </div>
        <PasswordInput />
        <button>Create account</button>
      </form>
      <p>
        By creating an account you agree <a href="/">to this terms</a>
      </p>
    </div>
  );
}
