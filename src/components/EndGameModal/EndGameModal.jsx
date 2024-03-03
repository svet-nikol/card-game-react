import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { addPlayerDataApi } from "../../api";
import { useLeaders } from "../../hooks/useLeaders";
import { LinkSt } from "../LinkSt/LinkSt";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick, gameTimeSec, pairsCount }) {
  const title = isWon ? (pairsCount !== 9 ? "Вы выиграли" : "Вы попали на Лидерборд!") : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const { getLeaders } = useLeaders();

  const newLeaderForm = {
    name: "",
    time: gameTimeSec,
  };
  const [newLeader, setNewLeader] = useState(newLeaderForm);
  const [newLeaderFormError, setNewLeaderFormError] = useState(null);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewLeader({ ...newLeader, [name]: value });
  };

  const navigate = useNavigate();

  const handleNewLeaderAdd = async e => {
    // e.preventDefault();
    try {
      const data = await addPlayerDataApi({
        name: newLeader.name,
        time: newLeader.time,
      });
      getLeaders(data.leaders);
      navigate("/leaderboard");
    } catch (error) {
      setNewLeaderFormError(error.message);
      console.log(newLeaderFormError);
    }
  };

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>

      {isWon ? (
        pairsCount !== 9 ? null : (
          <form onSubmit={handleNewLeaderAdd}>
            {" "}
            <input
              className={styles.input}
              onChange={handleInputChange}
              placeholder="Пользователь"
              name="name"
              value={newLeader.name}
            />
          </form>
        )
      ) : null}

      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick} to="/">
        Начать снова
      </Button>

      {isWon ? pairsCount !== 9 ? null : <LinkSt onClick={handleNewLeaderAdd}>Перейти к лидерборду</LinkSt> : null}
    </div>
  );
}

// {newLeaderFormError ? (<p style={{ color: "red" }}>{newLeaderFormError}</p> ) : (
