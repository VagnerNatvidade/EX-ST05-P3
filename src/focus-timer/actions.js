import state from "./state.js";

export function toggleRunning() {
  state.isRunnig = document.documentElement.classList.toggle("running");
}

export function reset() {
  state.isRunnig = false;
  document.documentElement.classList.remove("running");
}

export function set() {
  console.log("set");
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
}
