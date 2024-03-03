import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { getLeadersApi } from "../../api";
import { useLeaders } from "../../hooks/useLeaders";
import styles from "./LeaderboardPage.module.css";

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

  //   console.log(leadersList);

  const sortedLeadersList = [...leadersList].sort((a, b) => a.time - b.time);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {" "}
        <p>Лидерборд</p>
        <Button to="/">Начать игру</Button>
      </div>

      <div className={styles.listWrap}>
        {getLeadersError ? (
          <p style={{ color: "red" }}>{getLeadersError}</p>
        ) : (
          leadersList &&
          sortedLeadersList.map((item, index) => (
            <div className={styles.listItem} key={item.id}>
              <p># {index + 1}</p>
              <p>{item.name}</p>
              <p>{item.time}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
