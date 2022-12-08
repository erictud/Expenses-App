"use client";

import { useRef, useState } from "react";
import EyeIcon from "../../icons/EyeIcon";
import EyeIconCut from "../../icons/EyeIconCut";
import styles from "./PasswordInput.module.css";
export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<any>();

  const changeState = () => {
    setShowPassword((prevState) => !prevState);
    if (showPassword === true) passwordRef.current.type = "password";
    else passwordRef.current.type = "text";
  };
  return (
    <div className={styles["input-container"]}>
      <label htmlFor="password">Password</label>
      <div className={styles.container}>
        <input type="password" id="password" ref={passwordRef} />
        <div className={styles["svg"]} onClick={changeState}>
          {showPassword ? <EyeIconCut /> : <EyeIcon />}
        </div>
      </div>
    </div>
  );
}
