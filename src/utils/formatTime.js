import * as _ from "lodash";

export const formatTime = time => {
  const minutes = Math.floor(time / 60);
  const remainingSeconds = time % 60;
  const formattedMinutes = _.padStart(minutes.toString(), 2, "0");
  const formattedSeconds = _.padStart(remainingSeconds.toString(), 2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
};
