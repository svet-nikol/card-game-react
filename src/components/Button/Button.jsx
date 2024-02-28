import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

export function Button({ children, onClick, to }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} className={styles.button}>
      {children}
    </button>
  );
}
