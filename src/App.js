import React from "react";
import moment from "moment";

const COLORS = {
  BLUE: "#3AA3F7",
  ORANGE: "#f58442",
  GREEN: "#479A5F",
  RED: "#A61006"
};

function App() {
  const time = "X semaines";

  return (
    <div className="App">
      <h1>Il nous reste {time} avant que Mel ne nous abandonne</h1>
      <h2>Dépêchez vous de lui faire des câlins!</h2>
      <h2>❤️</h2>
    </div>
  );
}

export default App;
