import styles from "./navbar.module.css";
import Link from "next/link";
import Logo from "./logo";
import LoginIcon from "../../icons/LoginIcon";
import SignupIcon from "../../icons/SignupIcon";
import { useRecoilState } from "recoil";
import { authState } from "../../data/authState";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import ChartIconNav from "../../icons/ChartIconNav";
import DashboardIconNav from "../../icons/DashboardIconNav";

export default function Navbar() {
  const [uid, setUid] = useRecoilState(authState);
  const router = useRouter();
  const pathname = usePathname();

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
            <li className={`${styles["link-item"]} ${pathname === "/" && styles.active}`}>
              <DashboardIconNav />
              <Link href="/">Dashboard</Link>
            </li>
            <li className={`${styles["link-item"]} ${pathname === "/statistics" && styles.active}`}>
              <ChartIconNav />
              <Link href="/statistics">Statistics</Link>
            </li>
          </ul>
          <div onClick={Logout} className={styles["logout"]}>
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
