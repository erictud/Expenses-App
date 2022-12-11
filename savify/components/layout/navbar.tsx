import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";
import LoginIcon from "../../icons/LoginIcon";
import SignupIcon from "../../icons/SignupIcon";
import { useRecoilState } from "recoil";
import { authState } from "../../data/authState";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Navbar() {
  const [uid, setUid] = useRecoilState(authState);
  const router = useRouter();

  function Logout() {
    signOut(auth);
    setUid(null);
    router.push("/auth");
  }

  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["logo-container"]}>
        <Logo />
      </div>
      {uid ? (
        <div className={styles["navigation"]}>
          <ul className={styles["links-list"]}>
            <li className={styles["link-item"]}>
              <Link href="/">Dashboard</Link>
            </li>
            <li className={styles["link-item"]}>
              <Link href="/">Aqusitions</Link>
            </li>
          </ul>
          <div onClick={Logout}>
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
