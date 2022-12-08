"use client";

import ChartIcon from "../../icons/ChartIcon";
import styles from "./logo.module.css";

export default function Logo() {
  return (
    <a href="/" className={styles.logo}>
      <ChartIcon />
      <h2>
        <span>Sav</span>
        ify
      </h2>
    </a>
  );
}
