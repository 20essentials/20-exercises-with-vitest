/*
  Calculating the Time
  - Exercise from: https://2023.adventjs.dev/challenges/2023/13

  The elves are preparing for Christmas Eve and they need your help to determine if they have enough time or not ⏳.

  For this, they give you an array with the duration of each delivery. The format of the duration is HH:mm:ss, the deliveries start at 00:00:00 and the time limit is 07:00:00.

  Your function must return the time they will lack or the time they will have left over in order to finish the deliveries. The format of the returned duration should be HH:mm:ss.

  If they finish before 07:00:00, the remaining time until 07:00:00 should be displayed with a negative sign. For example, if they have 1 hour and 30 minutes left over, return -01:30:00
*/

export function calculateTime(deliveries) {
  if (!Array.isArray(deliveries) || deliveries.some(d => typeof d !== 'string'))
    throw new Error(`The parameter "deliviries" must be a string`);

  const toSeconds = (time) => {
    const [h, m, s] = time.split(":").map(Number);
    return h * 3600 + m * 60 + s;
  };

  const toHHMMSS = (totalSeconds) => {
    const sign = totalSeconds < 0 ? "-" : "";
    const abs = Math.abs(totalSeconds);
    const hours = String(Math.floor(abs / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((abs % 3600) / 60)).padStart(2, "0");
    const seconds = String(abs % 60).padStart(2, "0");
    return `${sign}${hours}:${minutes}:${seconds}`;
  };

  const totalLimit = toSeconds("07:00:00");
  const totalUsed = deliveries.reduce((acc, time) => acc + toSeconds(time), 0);
  const difference = totalUsed - totalLimit;

  return toHHMMSS(difference);
}


