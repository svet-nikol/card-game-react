import { useEffect, useState } from "react";
import { Button } from "../../components/Button/Button";
import { getLeadersApi } from "../../api";
import { useLeaders } from "../../hooks/useLeaders";

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
    <div className="">
      <p>Лидерборд</p>
      <Button to="/">Начать игру</Button>
      <div className="">
        {getLeadersError ? (
          <p style={{ color: "red" }}>{getLeadersError}</p>
        ) : (
          leadersList &&
          sortedLeadersList.map((item, index) => (
            <div style={{ display: "flex", color: "white", gap: "30px" }} key={item.id}>
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
