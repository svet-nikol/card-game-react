import { Link, useNavigate } from "react-router-dom";
import styles from "./LinkSt.module.css";

export function LinkSt({ children, onClick, to }) {
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
    <Link onClick={handleClick} className={styles.Link}>
      {children}
    </Link>
  );
}
