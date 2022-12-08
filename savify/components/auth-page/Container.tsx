import styles from "./Container.module.css";
import Logo from "../layout/logo";
import AuthBanner from "../../public/auth-banner.png";
import Image from "next/image";
import FormsAuth from "./Auth-forms";

export default function Container() {
  return (
    <div className={styles.container}>
      <div className={styles["row1"]}>
        <div className={styles["logo-box"]}>
          <Logo />
        </div>
        <h1>#1 money tracking spender on mobile and desktop</h1>
        <Image src={AuthBanner} alt="Auth banner" />
      </div>
      <FormsAuth />
    </div>
  );
}
