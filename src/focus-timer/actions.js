import state from "./state.js";
import * as timer from "./timer.js";

export function toggleRunning() {
  state.isRunnig = document.documentElement.classList.toggle("running");

  timer.countdown();
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
