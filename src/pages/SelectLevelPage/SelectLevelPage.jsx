import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";

export function SelectLevelPage() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div className={styles.checkboxWrap}>
          {" "}
          <input type="checkbox" name="light-mode" id="light-mode" />{" "}
          <label htmlFor="light-mode">Легкий режим (3 жизни)</label>
        </div>
      </div>
    </div>
  );
}
