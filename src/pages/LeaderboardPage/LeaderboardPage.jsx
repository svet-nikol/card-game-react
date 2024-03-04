import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { getLeadersApi } from "../../api";
import { useLeaders } from "../../hooks/useLeaders";
import styles from "./LeaderboardPage.module.css";
import { formatTime } from "../../utils/formatTime";

export function LeaderboardPage() {
  const { leadersList, setLeadersList } = useLeaders();

  const [getLeadersError, setGetLeadersError] = useState(null);
  useEffect(() => {
    getLeadersApi()
      .then(data => {
        setLeadersList(data.leaders);
      })
      .catch(error => {
        setGetLeadersError(error.message);
      });
  }, [setLeadersList]);

  const sortedLeadersList = [...leadersList].sort((a, b) => a.time - b.time);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {" "}
        <p>Лидерборд</p>
        <Button to="/">Начать игру</Button>
      </div>

      <div className={styles.listWrap}>
        <div className={styles.listItem} style={{ color: "#999999" }}>
          <p className={styles.ItemPosition}>Позиция</p>
          <p className={styles.ItemUser}>Пользователь</p>
          <p className={styles.ItemAchiev}></p>
          <p className={styles.ItemTime}>Время</p>
        </div>
        {getLeadersError ? (
          <p style={{ color: "red" }}>{getLeadersError}</p>
        ) : (
          leadersList &&
          sortedLeadersList.map((item, index) => (
            <div className={styles.listItem} key={item.id}>
              <p className={styles.ItemPosition}># {index + 1}</p>
              <p className={styles.ItemUser}>{item.name}</p>
              <p className={styles.ItemAchiev}></p>
              <p className={styles.ItemTime}>{formatTime(item.time)}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
