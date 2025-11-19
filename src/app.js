// js/app.js
import { generateId, STORAGE_KEYS } from "./utils.js";
import { createTimer } from "./timer.js";
import {
  createTaskElement,
  setControlsState,
  syncModeButtonState,
  qs,
} from "./dom.js";
import * as taskHelpers from "./tasks.js";
import * as modals from "./modals.js";

export function createPomodoroApp({ audioSources = {} } = {}) {
  // DOM elements (query once)
  const minutesDisplay = qs("minutes");
  const secondsDisplay = qs("seconds");
  const startBtn = qs("start");
  const pauseBtn = qs("pause");
  const resetBtn = qs("reset");
  const taskList = qs("task-list");
  const taskBtn = qs("add-task");
  const taskTxt = qs("new-task");
  const modes = document.querySelector(".modes");
  const container = document.querySelector(".container");
  const settingsBtn = qs("settings-btn");
  const settingsOverlay = qs("settings-overlay");
  const settingsForm = qs("settings-form");
  const settingsCancelBtn = qs("settings-cancel");
  const focusInput = qs("focus-duration");
  const shortInput = qs("short-break");
  const longInput = qs("long-break");
  const lapsInput = qs("laps-settings");
  const completedTasksBtn = qs("show-completed");
  const completedOverlay = qs("completed-overlay");
  const completedCloseBtn = qs("completed-close");
  const completedList = qs("completed-list");
  const clearCompletedBtn = qs("clear-completed");
  const lapsEl = qs("laps");
  const lapsText = qs("laps-text");

  // Audio
  const longBreakAudio = audioSources.long || null;
  const shortBreakAudio = audioSources.short || null;

  // app state
  let tasks = taskHelpers.loadFromStorage(STORAGE_KEYS.tasks) || [];
  if (!Array.isArray(tasks)) tasks = [];
  let completedTasks =
    taskHelpers.loadFromStorage(STORAGE_KEYS.completed) || [];
  if (!Array.isArray(completedTasks)) completedTasks = [];
  let settingsSaved = taskHelpers.loadFromStorage(STORAGE_KEYS.settings);
  // default settings (minutes)
  const defaultSettings = { focus: 25, short: 5, long: 15, laps: 4 };
  const settings = settingsSaved || defaultSettings;

  let totalLaps = settings.laps;
  let curLap = 1;
  let modesMap = {
    focus: settings.focus * 60,
    short: settings.short * 60,
    long: settings.long * 60,
  };
  let curMode = "focus";

  // timer factory instance
  let timer = createTimer({
    initialSeconds: modesMap[curMode],
    onTick: onTick,
    onComplete: onComplete,
  });

  function renderTasks() {
    if (!taskList) return;
    taskList.innerHTML = "";
    tasks.forEach((t) => taskList.appendChild(createTaskElement(t)));
  }

  function renderCompletedTasks() {
    if (!completedList) return;
    completedList.innerHTML = "";
    if (completedTasks.length === 0) {
      const placeholder = document.createElement("li");
      placeholder.className = "completed-empty";
      placeholder.textContent = "No completed tasks yet.";
      placeholder.setAttribute("role", "note");
      completedList.appendChild(placeholder);
      return;
    }
    completedTasks.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t.text;
      li.setAttribute("aria-label", `Completed task: ${t.text}`);
      completedList.appendChild(li);
    });
  }

  function updateDisplay(secondsLeft = timer.getTime()) {
    const minutesLeft = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    minutesDisplay.textContent = String(minutesLeft).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function onTick(secondsLeft) {
    updateDisplay(secondsLeft);
  }

  function onComplete() {
    // play audio depending on next mode
    if (curMode === "focus") {
      // after focus -> short or long
      if (curLap + 1 <= totalLaps) {
        if (shortBreakAudio) shortBreakAudio.play();
      } else {
        if (longBreakAudio) longBreakAudio.play();
      }
    } else if (curMode === "short") {
      if (shortBreakAudio) shortBreakAudio.play();
    } else {
      if (longBreakAudio) longBreakAudio.play();
    }
    controller();
  }

  function controller() {
    if (curMode === "focus") {
      const next = curLap + 1 <= totalLaps ? "short" : "long";
      changeMode(next);
      timer.reset(modesMap[next]);
      timer.start();
    } else if (curMode === "short" && curLap + 1 <= totalLaps) {
      curLap += 1;
      changeMode("focus");
      lapsText.textContent = `${curLap}/${totalLaps} Lap`;
      timer.reset(modesMap.focus);
      timer.start();
    } else {
      // finished lap cycle => reset everything
      curLap = 1;
      totalLaps = settings.laps;
      modesMap = {
        focus: settings.focus * 60,
        short: settings.short * 60,
        long: settings.long * 60,
      };
      changeMode("focus");
      timer.reset(modesMap.focus);
      setControlsState("idle", startBtn, pauseBtn, resetBtn);
      lapsEl.classList.add("hidden");
    }
  }

  function changeMode(mode) {
    curMode = mode;
    syncModeButtonState(mode, modes);
    timer.setSeconds(modesMap[mode]);
    updateTheme();
    updateDisplay(timer.getTime());
  }

  function updateTheme() {
    document.body.classList.remove("focus-theme", "short-theme", "long-theme");
    const themeClass = `${curMode}-theme`;
    document.body.classList.add(themeClass);
  }

  // public UI actions
  function startTimer() {
    if (timer.isRunning()) return;
    setControlsState("running", startBtn, pauseBtn, resetBtn);
    lapsEl.classList.remove("hidden");
    lapsText.textContent = `${curLap}/${totalLaps} Lap`;
    timer.start();
  }

  function pauseTimer() {
    if (!timer.isRunning() && !timer.getTime) return;
    if (timer.isRunning()) {
      timer.pause();
      pauseBtn.textContent = "Resume";
    } else {
      timer.resume();
      pauseBtn.textContent = "Pause";
    }
  }

  function resetTimer() {
    pauseBtn.textContent = "Pause";
    timer.reset(modesMap.focus);
    curLap = 1;
    changeMode("focus");
    setControlsState("idle", startBtn, pauseBtn, resetBtn);
    lapsEl.classList.add("hidden");
  }

  function addTaskFromInput() {
    const value = taskTxt.value.trim();
    if (!value) return;
    if (value.length > 100) {
      taskTxt.value = "";
      alert("Only 100 characters are allowed");
      return;
    }
    const newTask = { id: generateId(), text: value };
    tasks = taskHelpers.addTask(tasks, newTask);
    renderTasks();
    taskTxt.value = "";
  }

  function deleteTaskFromNode(li) {
    const id = li.dataset.id;
    if (!id) {
      li.remove();
      return;
    }
    tasks = taskHelpers.deleteTask(tasks, id);
    renderTasks();
  }

  function editTaskFromNode(li) {
    const span = li.querySelector(".task-text");
    const id = li.dataset.id;
    if (!span || !id) return;
    const currentText = span.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "task-edit-input";
    input.style.cssText = `
      flex: 1;
      padding: 4px 8px;
      border: 2px solid var(--accent-color);
      border-radius: 4px;
      background: #2b2b2b;
      color: #fff;
      font-size: inherit;
      font-family: inherit;
    `;
    let finished = false;
    input.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "Enter") {
          save();
        } else if (e.key === "Escape") {
          cancel();
        }
      },
      { once: false }
    );
    input.addEventListener("blur", save, { once: true });

    function save() {
      if (finished) return;
      finished = true;
      const newText = input.value.trim();
      if (newText) {
        tasks = taskHelpers.updateTask(tasks, id, newText);
        span.textContent = newText;
      }
      span.style.display = "";
      input.remove();
    }

    function cancel() {
      if (finished) return;
      finished = true;
      span.style.display = "";
      input.remove();
    }

    span.style.display = "none";
    li.insertBefore(input, span);
    input.focus();
    input.select();
  }

  function completeTaskFromNode(li) {
    const id = li.dataset.id;
    if (!id) return;
    const result = taskHelpers.completeTask(tasks, completedTasks, id);
    tasks = result.tasks;
    completedTasks = result.completedTasks;
    renderTasks();
    renderCompletedTasks();
  }

  // modal logic (uses modals helpers)
  const previouslyFocused = { value: null };

  function openSettingsModal() {
    focusInput.value = Math.round(settings.focus);
    shortInput.value = Math.round(settings.short);
    longInput.value = Math.round(settings.long);
    lapsInput.value = Math.round(settings.laps);
    modals.openModal(settingsOverlay, previouslyFocused, container);
    focusInput.focus();
  }

  function closeSettingsModal() {
    modals.closeModal(settingsOverlay, previouslyFocused, container);
    settingsForm.reset();
  }

  function submitSettingsForm(e) {
    e.preventDefault();
    const focus = parseInt(focusInput.value, 10);
    const short = parseInt(shortInput.value, 10);
    const long = parseInt(longInput.value, 10);
    const laps = parseInt(lapsInput.value, 10);

    if (
      Number.isNaN(focus) ||
      Number.isNaN(short) ||
      Number.isNaN(long) ||
      Number.isNaN(laps) ||
      focus <= 0 ||
      short <= 0 ||
      long <= 0 ||
      laps <= 0 ||
      focus > 120 ||
      short > 20 ||
      long > 60 ||
      laps > 10
    ) {
      alert("Please enter valid numeric values for all timers.");
      return;
    }

    settings.focus = focus;
    settings.short = short;
    settings.long = long;
    settings.laps = laps;

    // persist
    // taskHelpers.saveToStorage = taskHelpers.saveToStorage || (() => {}); // guard if not exported
    // localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));

    // persist settings via exported helper (ensures consistent storage handling)
    if (typeof taskHelpers.saveToStorage === "function") {
      taskHelpers.saveToStorage(STORAGE_KEYS.settings, settings);
    } else {
      // fallback if helper is missing — direct localStorage
      localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
    }

    totalLaps = settings.laps;
    modesMap = {
      focus: settings.focus * 60,
      short: settings.short * 60,
      long: settings.long * 60,
    };
    // reset timer to new focus
    resetTimer();
    closeSettingsModal();
  }

  // completed modal
  function openCompletedModal() {
    renderCompletedTasks();
    modals.openModal(completedOverlay, previouslyFocused, container);
    completedCloseBtn.focus();
  }

  function closeCompletedModal() {
    modals.closeModal(completedOverlay, previouslyFocused, container);
  }

  function clearCompleted() {
    completedTasks = [];
    renderCompletedTasks();
    localStorage.setItem(STORAGE_KEYS.completed, JSON.stringify([]));
  }

  // event bindings
  function bindEvents() {
    startBtn.addEventListener("click", startTimer);
    pauseBtn.addEventListener("click", pauseTimer);
    resetBtn.addEventListener("click", resetTimer);
    taskBtn.addEventListener("click", addTaskFromInput);

    taskTxt.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTaskFromInput();
    });

    // delegated task buttons
    taskList.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li) return;
      if (e.target.classList.contains("delete-btn")) {
        deleteTaskFromNode(li);
      } else if (e.target.classList.contains("edit-btn")) {
        editTaskFromNode(li);
      } else if (e.target.classList.contains("complete-btn")) {
        const res = taskHelpers.completeTask(
          tasks,
          completedTasks,
          li.dataset.id
        );
        tasks = res.tasks;
        completedTasks = res.completedTasks;
        renderTasks();
        renderCompletedTasks();
      }
    });

    modes.addEventListener("click", (event) => {
      const targetButton = event.target.closest("button");
      if (!targetButton) return;
      const mode = targetButton.id;
      if (!["focus", "short", "long"].includes(mode)) return;
      if (curMode === mode && !timer.isRunning()) return;
      timer.pause();
      timer.reset(modesMap[mode]);
      changeMode(mode);
      setControlsState("idle", startBtn, pauseBtn, resetBtn);
    });

    settingsBtn.addEventListener("click", openSettingsModal);
    settingsCancelBtn.addEventListener("click", closeSettingsModal);
    settingsForm.addEventListener("submit", submitSettingsForm);
    settingsOverlay.addEventListener("click", (ev) => {
      if (ev.target === settingsOverlay) closeSettingsModal();
    });

    completedTasksBtn.addEventListener("click", openCompletedModal);
    completedCloseBtn.addEventListener("click", closeCompletedModal);
    clearCompletedBtn.addEventListener("click", clearCompleted);
    completedOverlay.addEventListener("click", (ev) => {
      if (ev.target === completedOverlay) closeCompletedModal();
    });

    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") {
        if (!settingsOverlay.classList.contains("hidden")) closeSettingsModal();
        else if (!completedOverlay.classList.contains("hidden"))
          closeCompletedModal();
      }
    });
  }

  // initial render
  function init() {
    setControlsState("idle", startBtn, pauseBtn, resetBtn);
    syncModeButtonState("focus", modes);
    renderTasks();
    renderCompletedTasks();
    updateDisplay(modesMap.focus);
    bindEvents();
  }

  // public API for tests or external control
  return {
    init,
    startTimer,
    pauseTimer,
    resetTimer,
    addTaskFromInput,
    getState: () => ({ tasks, completedTasks, settings, curMode, curLap }),
  };
}
