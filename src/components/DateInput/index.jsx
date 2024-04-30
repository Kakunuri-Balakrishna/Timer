import Button from "../Button";
// import { useState } from "react";
import "./style.css";

function DateInput({
  timerStarted,
  startTimer,
  cancelTimer,
  onChange,
  targetDateTime,
}) {
  // Function to start the timer

  return (
    <div className="wrapper-main">
      <div className="date-main">
        <h2 id="date-header">Countdown Timer</h2>

        <input
          type="datetime-local"
          id="date-time"
          value={targetDateTime}
          onChange={onChange}
          min={new Date().toISOString().slice(0, 16)}
          max={new Date(+new Date() + 99 * 24 * 60 * 60 * 1000)
            .toISOString()
            .slice(0, 16)}
        />
        <Button
          type="submit"
          onClick={timerStarted ? cancelTimer : startTimer}
          buttonText={timerStarted ? "Cancel" : "Start Time"}
        />

        <div className="background-blob">
          <svg viewBox="0 10 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#A2D9FF"
              d="M35,-57C48.7,-52.7,65.4,-50.1,75,-40.8C84.6,-31.6,87.2,-15.8,83.1,-2.4C79,11.1,68.3,22.2,60.3,34.1C52.2,46.1,46.8,58.9,37.2,68.8C27.6,78.6,13.8,85.5,0,85.4C-13.7,85.3,-27.5,78.3,-39.3,69.8C-51.1,61.2,-61,51.1,-68.5,39.2C-76,27.3,-80.9,13.7,-79.6,0.8C-78.3,-12.1,-70.7,-24.3,-62.9,-35.6C-55.1,-46.9,-47.1,-57.3,-36.6,-63.4C-26.1,-69.5,-13,-71.2,-1.2,-69.2C10.7,-67.1,21.3,-61.3,35,-57Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DateInput;
