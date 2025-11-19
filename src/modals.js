// js/modals.js
export function applyOverlayBlur(container) {
  if (!container) return;
  container.classList.add("blurred");
  container.setAttribute("aria-hidden", "true");
}

export function removeOverlayBlur(container) {
  if (!container) return;
  container.classList.remove("blurred");
  container.removeAttribute("aria-hidden");
}

export function openModal(overlayEl, previouslyFocusedRef, container) {
  previouslyFocusedRef.value = document.activeElement;
  applyOverlayBlur(container);
  overlayEl.classList.remove("hidden");
  overlayEl.setAttribute("aria-hidden", "false");
}

export function closeModal(overlayEl, previouslyFocusedRef, container) {
  overlayEl.classList.add("hidden");
  overlayEl.setAttribute("aria-hidden", "true");
  removeOverlayBlur(container);
  const prev = previouslyFocusedRef.value;
  if (prev && typeof prev.focus === "function") {
    prev.focus();
  }
  previouslyFocusedRef.value = null;
}
