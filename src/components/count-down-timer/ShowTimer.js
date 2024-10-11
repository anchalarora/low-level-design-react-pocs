const ShowTimer = (props) => {
  const {
    hours,
    minutes,
    seconds,
    isPaused,
    handlePause,
    handleReset,
    handleResume,
  } = props;
  return (
    <div>
      <div className="timer-box">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
        <span>:</span>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>

      <div className="action-box">
        {!isPaused && (
          <button onClick={handlePause} className="timer-button">
            Pause
          </button>
        )}
        {isPaused && (
          <button onClick={handleResume} className="timer-button">
            Resume
          </button>
        )}
        <button className="timer-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ShowTimer;
