import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { getLeadersApi } from "../../api";
import { useLeaders } from "../../hooks/useLeaders";
import styles from "./LeaderboardPage.module.css";
import { formatTime } from "../../utils/formatTime";
import easyModeImgUrl from "./images/easyMode.png";
import withSuperpowerImgUrl from "./images/withSuperpower.png";
import hardModeImgUrl from "./images/hardMode.png";
import withoutSuperpowerImgUrl from "./images/withoutSuperpower.png";

export function LeaderboardPage() {
  const { leadersList, setLeadersList } = useLeaders();
  const [leadersListLoading, setLeadersListLoading] = useState(false);

  const [getLeadersError, setGetLeadersError] = useState(null);
  useEffect(() => {
    setLeadersListLoading(true);
    getLeadersApi()
      .then(data => {
        setLeadersList(data.leaders);
        setLeadersListLoading(false);
      })
      .catch(error => {
        setGetLeadersError(error.message);
      });
  }, [setLeadersList]);

  const sortedLeadersList = [...leadersList].sort((a, b) => a.time - b.time);

  return (
    <div className={styles.container}>
      {leadersListLoading ? (
        <div className={styles.loader}></div>
      ) : (
        <>
          <div className={styles.header}>
            <p>Лидерборд</p>
            <Button to="/">Начать игру</Button>
          </div>

          <div className={styles.listWrap}>
            {getLeadersError ? (
              <div className={styles.errorMessage}>{getLeadersError}</div>
            ) : (
              <>
                <div className={styles.listItem} style={{ color: "#999999" }}>
                  <p className={styles.ItemPosition}>Позиция</p>
                  <p className={styles.ItemUser}>Пользователь</p>
                  <p className={styles.ItemAchiev}>Достижения</p>
                  <p className={styles.ItemTime}>Время</p>
                </div>

                {leadersList &&
                  sortedLeadersList.map((item, index) => {
                    const isHardMode = item.achievements.includes(1);
                    const isUsedSuperpower = item.achievements.includes(2);
                    return (
                      <div className={styles.listItem} key={item.id}>
                        <p className={styles.ItemPosition}># {index + 1}</p>
                        <p className={styles.ItemUserInner}>{item.name}</p>
                        <div className={styles.ItemAchiev}>
                          <img
                            src={isHardMode ? hardModeImgUrl : easyModeImgUrl}
                            alt={isHardMode ? "hardModeImg" : "easyModeImg"}
                          />
                          <img
                            src={isUsedSuperpower ? withoutSuperpowerImgUrl : withSuperpowerImgUrl}
                            alt={isUsedSuperpower ? "withoutSuperpowerImg" : "withSuperpowerImg"}
                          />
                        </div>
                        <p className={styles.ItemTime}>{formatTime(item.time)}</p>
                      </div>
                    );
                  })}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
