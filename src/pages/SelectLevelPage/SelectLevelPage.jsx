import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useTriers } from "../../hooks/useTriers";
import { useState } from "react";

export function SelectLevelPage() {
  const triersForEasyMode = 3;
  const triersRegularMode = 1;
  const { setNumberOfTries } = useTriers();
  const [checked, setChecked] = useState(false);
  const handleInputChange = e => {
    const { value } = e.target;
    setChecked(!checked);
    !checked ? setNumberOfTries(value) : setNumberOfTries(triersRegularMode);
  };

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
          <input
            type="checkbox"
            name="easy-mode"
            id="easy-mode"
            value={triersForEasyMode}
            checked={checked}
            onChange={handleInputChange}
          />{" "}
          <label htmlFor="easy-mode">Легкий режим (3 жизни)</label>
        </div>
      </div>
    </div>
  );
}
