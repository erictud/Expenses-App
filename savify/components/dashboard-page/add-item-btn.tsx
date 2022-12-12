import Link from "next/link";
import PlusIcon from "../../icons/PlusIcon";
import styles from "./add-item-btn.module.css";
export default function AddItemButton() {
  return (
    <button className={styles.btn}>
      <Link href="/add-item">
        <PlusIcon />
      </Link>
    </button>
  );
}
