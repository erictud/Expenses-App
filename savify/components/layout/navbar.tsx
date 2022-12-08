"use client";

import styles from "./navbar.module.css";
import Link from "next/link";
import UserIcon from "../../icons/UserIcon";
import Logo from "./logo";
import LoginIcon from "../../icons/LoginIcon";
import SignupIcon from "../../icons/SignupIcon";
import { useRecoilState } from "recoil";
import { authState } from "../../data/authState";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { state } = useRecoilState(authState)[0];
  const router = useRouter();

  function logout() {
    router.push("/auth");
  }

  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
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
          <div onClick={logout}>
            <LoginIcon />
          </div>
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
