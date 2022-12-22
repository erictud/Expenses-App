import styles from "./filter-inputs.module.css";

export default function FilterInputs() {
  return (
    <div className={styles["filter-section"]}>
      <div className="input-container">
        <label htmlFor="date">Filter by date</label>
        <select id="date">
          <option value="desc">From newest to oldest</option>
          <option value="cresc">From oldest to newest</option>
        </select>
      </div>
    </div>
  );
}
