// js/timer.js
export function createTimer({
  initialSeconds = 25 * 60,
  onTick = () => {},
  onComplete = () => {},
} = {}) {
  let secondsLeft = initialSeconds;
  let intervalId = null;
  let paused = true;

  function setSeconds(s) {
    secondsLeft = Math.max(0, Math.floor(s));
  }

  function start() {
    if (intervalId !== null) return;
    paused = false;
    intervalId = setInterval(() => {
      secondsLeft -= 1;
      onTick(secondsLeft);
      if (secondsLeft <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        onComplete();
      }
    }, 1000);
    onTick(secondsLeft);
  }

  function pause() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      paused = true;
    }
  }

  function resume() {
    if (intervalId !== null) return;
    paused = false;
    start();
  }

  function reset(newSeconds = initialSeconds) {
    pause();
    setSeconds(newSeconds);
    onTick(secondsLeft);
  }

  function isRunning() {
    return intervalId !== null;
  }

  function getTime() {
    return secondsLeft;
  }

  return { start, pause, resume, reset, isRunning, getTime, setSeconds };
}
