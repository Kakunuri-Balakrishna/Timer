import "./style.css";

function DisplayWrapper({ timeLeft }) {
  return (
    <>
      {/* {!(countDownData.message.length > 0) ? ( */}
      <div className="display-wrapper-container">
        <h3 id="remaining-time-header">Remaining Time</h3>
        <div className="display-wrapper-main">
          <div className="days">
            <h1>{timeLeft.days}</h1>
            <h5>day(s)</h5>
          </div>
          <div className="hour">
            <h1>{timeLeft.hours}</h1>
            <h5>hour(s)</h5>
          </div>
          <div className="minutes">
            <h1>{timeLeft.minutes}</h1>
            <h5>minute(s)</h5>
          </div>
          <div className="seconds">
            <h1>{timeLeft.seconds}</h1>
            <h5>seconds(s)</h5>
          </div>
        </div>
      </div>
      {/* ) : ( <div className="highlight">Nothing</div>
      )} */}
    </>
  );
}

export default DisplayWrapper;
