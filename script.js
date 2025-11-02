"use strict";

///////////////////////////////

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const strtBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const focusmode = document.getElementById("focus");
const shortmode = document.getElementById("short");
const longmode = document.getElementById("long");
const modes = document.querySelector(".modes");

const req = {
  workTime: 20,
  timeLeft: null,
  timerIntervel: null,
  pause: null,
  break: {
    custom: null,
    focus: 10 * 60,
    short: 20,
    long: 15 * 60,
  },
  active: 10 * 60,
  updateWorkTime: function (time) {
    this.workTime = time * 60;
  },
  updateTimeLeft: function () {
    this.timeLeft = this.workTime;
    this.updateBreak(this.timeLeft);
  },
  updateBreak: function (time) {
    this.break.custom = time * 60;
    console.log(this.break.custom);
  },
};

req.updateTimeLeft();

const updateDisplay = function () {
  const minutesLeft = Math.floor(req.timeLeft / 60);
  const secondsLeft = req.timeLeft % 60;
  minutesDisplay.textContent = String(minutesLeft).padStart(2, "0");
  secondsDisplay.textContent = String(secondsLeft).padStart(2, "0");
};

const changerBreak = function (brk) {
  //   console.log(`Changed to ${brk} break`);
  if (brk == "custom") {
    req.active = req.break[brk];
  } else {
    req.active = req.break[brk];
    console.log(req.active);
  }
};

///Timers functions///
const timers = {
  teaBreak(time) {
    if (req.timerIntervel !== null) return;
    console.log("break");
    req.timeLeft = time;
    req.pause = false;
    pauseBtn.textContent = "Pause";
    req.timerIntervel = setInterval(() => {
      req.timeLeft -= 1;
      if (req.timeLeft < 0) {
        clearInterval(req.timerIntervel);
        req.timerIntervel = null;
        return;
      }

      updateDisplay();

      if (req.timeLeft === 0) {
        clearInterval(req.timerIntervel);
        req.timerIntervel = null;
        alert("Breaks's up!");
      }
    }, 1000);
  },
  ///Start Timer///
  startTimer() {
    if (req.timerIntervel !== null) return;
    console.log("start");
    req.pause = false;
    pauseBtn.textContent = "Pause";
    req.timerIntervel = setInterval(() => {
      req.timeLeft -= 1;
      if (req.timeLeft < 0) {
        clearInterval(req.timerIntervel);
        req.timerIntervel = null;
        return;
      }

      updateDisplay();

      if (req.timeLeft === 0) {
        clearInterval(req.timerIntervel);
        req.timerIntervel = null;
        alert("Time's up!");
        this.teaBreak(req.active);
      }
    }, 1000);
  },

  /// Pause,Resume Timer///

  pauseTimer() {
    if (req.pause === null) return;
    if (!req.pause) {
      console.log("paused");
      clearInterval(req.timerIntervel);
      req.timerIntervel = null;
      pauseBtn.textContent = "Resume";
      req.pause = true;
    } else {
      console.log("Resumed");
      this.startTimer();
    }
  },

  ////Reset Timer///

  resetTimer() {
    if (req.timerIntervel !== null || req.pause === true) {
      console.log("reset");
      clearInterval(req.timerIntervel);
      req.timerIntervel = null;
      req.pause = null;
      pauseBtn.textContent = "Pause";
    }
    req.timeLeft = req.workTime;
    // update UI
    updateDisplay();
  },

  ///Break system///
};

const init = function () {
  req.updateTimeLeft();
  updateDisplay();
  strtBtn.addEventListener("click", timers.startTimer);
  pauseBtn.addEventListener("click", timers.pauseTimer);
  resetBtn.addEventListener("click", timers.resetTimer);
  modes.addEventListener("click", function (e) {
    if (e.target.id === "modes") return;
    // console.log(document.querySelector(".active").id);
    const curr = document.querySelector(".active").id;
    if (e.target.id === curr) return;
    document.querySelector(".active").classList.remove("active");
    if (e.target.id === "focus") {
      focusmode.classList.add("active");
      changerBreak(e.target.id);
    } else if (e.target.id === "short") {
      shortmode.classList.add("active");
      changerBreak(e.target.id);
    } else if (e.target.id === "long") {
      longmode.classList.add("active");
      changerBreak(e.target.id);
    }
  });
};
init();
//
