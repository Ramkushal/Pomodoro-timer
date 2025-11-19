// js/dom.js
import { safeText } from "./utils.js";

export function qs(id) {
  return document.getElementById(id);
}

export function createTaskElement(task) {
  const listItem = document.createElement("li");
  listItem.dataset.id = task.id;

  const taskTextSpan = document.createElement("span");
  taskTextSpan.className = "task-text";
  taskTextSpan.textContent = task.text;

  const buttonsWrapper = document.createElement("div");
  buttonsWrapper.className = "task-buttons";

  const completeButton = document.createElement("button");
  completeButton.className = "task-btn complete-btn";
  completeButton.title = "Completed";
  completeButton.type = "button";
  completeButton.textContent = "✔️";
  completeButton.setAttribute(
    "aria-label",
    `Mark ${safeText(task.text)} as complete`
  );

  const editButton = document.createElement("button");
  editButton.className = "task-btn edit-btn";
  editButton.title = "Edit task";
  editButton.type = "button";
  editButton.textContent = "✏️";
  editButton.setAttribute("aria-label", `Edit ${safeText(task.text)}`);

  const deleteButton = document.createElement("button");
  deleteButton.className = "task-btn delete-btn";
  deleteButton.title = "Delete task";
  deleteButton.type = "button";
  deleteButton.textContent = "🗑️";
  deleteButton.setAttribute("aria-label", `Delete ${safeText(task.text)}`);

  buttonsWrapper.append(completeButton, editButton, deleteButton);
  listItem.append(taskTextSpan, buttonsWrapper);

  return listItem;
}

export function setControlsState(state, startBtn, pauseBtn, resetBtn) {
  if (state === "idle") {
    startBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    pauseBtn.textContent = "Pause";
  } else if (state === "running") {
    startBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
  }
}

export function syncModeButtonState(activeMode, modesContainer) {
  if (!modesContainer) return;
  modesContainer.querySelectorAll("button").forEach((button) => {
    const isActive = button.id === activeMode;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}
