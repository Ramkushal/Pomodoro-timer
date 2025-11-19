// js/utils.js
export const STORAGE_KEYS = {
  tasks: "pomodoroTasks",
  completed: "pomodoroCompletedTasks",
  settings: "pomodoroSettings",
};

export function generateId() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2, 10)}`;
}

export function safeText(text = "") {
  return String(text).replace(/"/g, "'");
}
