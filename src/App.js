import React, { useEffect, useState } from "react";
import moment from "moment";

const COLORS = ["#3AA3F7", "#f58442", "#479A5F", "#A61006"];

const LEAVE_DATE = moment("2020-07-08 12:00:00");

function getTimeLeft() {
  const now = moment();
  const weeks = LEAVE_DATE.diff(now, "weeks");
  const days = LEAVE_DATE.diff(now, "days") - weeks * 7;
  const hours = LEAVE_DATE.diff(now, "hours") - weeks * 7 * 24 - days * 24;
  const minutes =
    LEAVE_DATE.diff(now, "minutes") -
    weeks * 7 * 24 * 60 -
    days * 24 * 60 -
    hours * 60;
  const seconds =
    LEAVE_DATE.diff(now, "seconds") -
    weeks * 7 * 24 * 60 * 60 -
    days * 24 * 60 * 60 -
    hours * 60 * 60 -
    minutes * 60;

  return `${weeks} semaine${weeks > 1 ? "s" : ""}, ${days} jour${days > 1 ?
    "s" : ""}, ${hours} heure${hours > 1 ? "s" : ""}, ${minutes} minute${minutes >
    1 ? "s" : ""} et ${seconds} seconde${seconds > 1 ? "s" : ""}`;
}

function App() {
  const [colorKey, setColorKey] = useState(0);
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setTimeout(() => {
      setColorKey(colorKey === COLORS.length - 1 ? 0 : colorKey + 1);
    }, 2000);
    return () => clearInterval(t);
  }, [colorKey]);

  useEffect(() => {
    setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: COLORS[colorKey] }}>
      <h1>Il nous reste {time} avant que Mel ne nous abandonne...</h1>
      <h2>Dépêchez-vous de lui faire des câlins! (enfin pas de trop prêt non plus hein, on est en pleine quarantaine là 😉)</h2>
      <h1>❤️</h1>
    </div>
  );
}

export default App;
