import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../../../data/authState";
import ErrorIcon from "../../../icons/ErrorIcon";
import EyeIcon from "../../../icons/EyeIcon";
import EyeIconCut from "../../../icons/EyeIconCut";
import Spinner from "../../layout/spinner";
import styles from "./LoginForm.module.css";
import Modal from "../../layout/modal";
import { modalState } from "../../../data/errorModalState";

export default function LoginForm() {
  const [errorModalValue, setErrorModalValue] = useRecoilState(modalState);
  const [_, setAuthData] = useRecoilState(authState);
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailHasError, setEmailHasError] = useState("");
  const [passwordHasError, setPasswordHasError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef<any>();

  const changeState = () => {
    setShowPassword((prevState) => !prevState);
    if (showPassword === true) passwordRef.current.type = "password";
    else passwordRef.current.type = "text";
  };

  async function submitForm(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);
    if (emailValue && !emailValue.includes("@")) {
      setEmailHasError("The email is invalid");
      setLoading(false);

      return;
    } else setEmailHasError("");
    if (passwordValue && passwordValue.trim().length < 8) {
      setPasswordHasError("Password must have at least 8 characters");
      setLoading(false);
      return;
    } else setPasswordHasError("");
    const req = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!req.ok) {
      setLoading(false);
      setErrorModalValue("Trouble with creating an accout. Please try again later!");
      return;
    }
    const data = await req.json();
    const uid = data.uid;
    setAuthData(uid);
    router.push("/");
    return;
  }

  const closeModal = (e: any) => {
    setErrorModalValue("");
  };

  return (
    <>
      {errorModalValue && (
        <Modal btnVal="Auth page" resetFunction={closeModal} value={errorModalValue} />
      )}
      <div className={styles["signup-form"]}>
        <h2>Sign in</h2>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles["input-container"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              value={emailValue}
              onChange={(e) => setEmailValue(e.currentTarget.value)}
            />
            {emailHasError && (
              <div className={styles["error-container"]}>
                <ErrorIcon />
                <span className={styles["error"]}>{emailHasError}</span>
              </div>
            )}
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="password">Password</label>
            <div className={styles.container}>
              <input
                type="password"
                id="password"
                value={passwordValue}
                required
                ref={passwordRef}
                onChange={(e) => setPasswordValue(e.currentTarget.value)}
              />
              <div className={styles["svg"]} onClick={changeState}>
                {showPassword ? <EyeIconCut /> : <EyeIcon />}
              </div>
            </div>
            {passwordHasError && (
              <div className={styles["error-container"]}>
                <ErrorIcon />
                <span className={styles["error"]}>{passwordHasError}</span>
              </div>
            )}
          </div>
          <button disabled={emailValue.trim().length === 0 || passwordValue.trim().length === 0}>
            {loading ? <Spinner /> : "Log in"}
          </button>
        </form>
        <p>
          Fogot the password? <a href="/">Reset it</a>
        </p>
      </div>
    </>
  );
}
