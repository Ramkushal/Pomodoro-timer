// js/main.js
import { createPomodoroApp } from "./app.js";

const audioSources = {
  long: new Audio(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
  ),
  short: new Audio(
    "https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
  ),
};

document.addEventListener("DOMContentLoaded", () => {
  const app = createPomodoroApp({ audioSources });
  app.init();
  window._pomodoro = app; // optional debug handle
});
