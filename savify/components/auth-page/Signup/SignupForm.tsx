import { FormEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import ErrorIcon from "../../../icons/ErrorIcon";
import EyeIcon from "../../../icons/EyeIcon";
import EyeIconCut from "../../../icons/EyeIconCut";
import Modal from "../../layout/modal";
import Spinner from "../../layout/spinner";
import { modalState } from "../../../data/errorModalState";
import styles from "./SignupForm.module.css";
import { authState } from "../../../data/authState";
import { useRouter } from "next/navigation";
export default function SigninForm() {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [firstNameHasError, setFirstNameHasError] = useState<string | undefined>("");
  const [lastNameHasError, setLastNameHasError] = useState<string | undefined>("");
  const [emailHasError, setEmailHasError] = useState<string | undefined>("");
  const [passwordHasError, setPasswordHasError] = useState<string | undefined>("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const passwordRef = useRef<any>();
  const [errorModalStateVal, setErrorModalStateVal] = useRecoilState(modalState);
  const [_, setAuthStateVal] = useRecoilState(authState);
  const router = useRouter();

  const changeState = () => {
    setShowPassword((prevState) => !prevState);
    if (showPassword === true) passwordRef.current.type = "password";
    else passwordRef.current.type = "text";
  };

  async function submitForm(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    setLoading(true);
    if (firstName && firstName.trim().length < 3) {
      setFirstNameHasError("The name must contain at least 3 characters");
      setLoading(false);
      return;
    } else setFirstNameHasError("");
    if (lastName && lastName.trim().length < 3) {
      setLastNameHasError("The name must contain at least 3 characters");
      setLoading(false);

      return;
    } else setLastNameHasError("");
    if (email && !email.includes("@")) {
      setEmailHasError("The email is invalid");
      setLoading(false);

      return;
    } else setEmailHasError("");
    if (password && password.trim().length < 8) {
      setPasswordHasError("Password must have at least 8 characters");
      setLoading(false);
      return;
    } else setPasswordHasError("");
    const req = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!req.ok) {
      setErrorModalStateVal("Trouble with creating an accout. Please try again later!");
      setLoading(false);
      return;
    }
    const data = await req.json();
    setAuthStateVal(data.uid);
    router.push("/");
    setLoading(false);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  }

  const closeModal = (e: any) => {
    setErrorModalStateVal("");
  };

  return (
    <>
      {errorModalStateVal && <Modal resetFunction={closeModal} value={errorModalStateVal} />}
      <div className={styles["signup-form"]}>
        <h2>Sign up</h2>
        <form className={styles.form} onSubmit={submitForm}>
          <div className={styles["input-row"]}>
            <div className={styles["input-container"]}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                required
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
              {firstNameHasError && (
                <div className={styles["error-container"]}>
                  <ErrorIcon />
                  <span className={styles["error"]}>{firstNameHasError}</span>
                </div>
              )}
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="secondRow">Second Name</label>
              <input
                type="text"
                id="secondRow"
                value={lastName}
                required
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
              {lastNameHasError && (
                <div className={styles["error-container"]}>
                  <ErrorIcon />
                  <span className={styles["error"]}>{lastNameHasError}</span>
                </div>
              )}
            </div>
          </div>
          <div className={styles["input-container"]}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.currentTarget.value)}
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
                value={password}
                required
                ref={passwordRef}
                onChange={(e) => setPassword(e.currentTarget.value)}
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
          <button
            disabled={
              email?.trim().length === 0 ||
              password?.trim().length === 0 ||
              lastName?.trim().length === 0 ||
              firstName?.trim().length === 0
            }
          >
            {loading ? <Spinner /> : "Create account"}
          </button>
        </form>
        <p>
          By creating an account you agree <a href="/">to the terms and conditions</a>
        </p>
      </div>
    </>
  );
}
