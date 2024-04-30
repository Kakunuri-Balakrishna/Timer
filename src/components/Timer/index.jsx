import { useState } from "react";
import DisplayWrapper from "../Displayer/index";

import DateInput from "./../DateInput/index";

function Timer() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [targetDateTime, setTargetDateTime] = useState("");
  const [timerId, setTimerId] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  // const [timerStarted, setTimerStarted] = useState(false);
  // Function to format date as "yyyy-MM-ddThh:mm"
  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  // console.log(formatDate(targetDateTime).getTime());

  const startTimer = () => {
    if (!targetDateTime) {
      alert("Please select a date and time");
      return;
    }
    console.log(targetDateTime.getTime());

    const timer = setInterval(() => {
      const difference = targetDateTime.getTime() - new Date().getTime();
      console.log(difference);
      if (difference <= 0) {
        clearInterval(timer);
        setTimerId(null);
        setTimerStarted(false);
        // Optionally, add sound notification here
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    setTimerId(timer);
    setTimerStarted(true);
  };

  // Function to handle cancel timer
  const cancelTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
    setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    setTimerStarted(false);
  };

  // Function to handle date-time input change
  const handleDateTimeChange = (event) => {
    setTargetDateTime(new Date(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    if (timerStarted) {
      cancelTimer();
    } else {
      startTimer();
    }
  };

  return (
    <div>
      <DateInput
        timerStarted={timerStarted}
        startTimer={startTimer}
        cancelTimer={cancelTimer}
        onChange={handleDateTimeChange}
        targetDateTime={formatDate(targetDateTime)}
        onSubmit={handleSubmit}
      />
      <DisplayWrapper timeLeft={timeLeft} />
    </div>
  );
}

export default Timer;
