"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import UserIcon from "../../icons/UserIcon";
import Logo from "../layout/logo";
import LoginIcon from "../../icons/LoginIcon";
import SignupIcon from "../../icons/SignupIcon";
import { useRecoilState } from "recoil";
import { authState } from "../../data/authState";

export default function Navbar() {
  const { state } = useRecoilState(authState);
  return (
    <div className={styles["nav-bar"]}>
      <Link href="/">
        <div className={styles["logo-container"]}>
          <Logo />
        </div>
      </Link>
      {state ? (
        <div className={styles["navigation"]}>
          <ul className={styles["links-list"]}>
            <li className={styles["link-item"]}>
              <Link href="/">Dashboard</Link>
            </li>
            <li className={styles["link-item"]}>
              <Link href="/">Aqusitions</Link>
            </li>
          </ul>
          <UserIcon />
        </div>
      ) : (
        <div className={styles["navigation"]}>
          <ul className={styles["links-list"]}>
            <li className={styles["link-item"]}>
              <LoginIcon />
              <Link href="/">Log in</Link>
            </li>{" "}
            <li className={styles["link-item"]}>
              <SignupIcon />
              <Link href="/">Create account</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
