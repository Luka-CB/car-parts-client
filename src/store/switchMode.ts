import { defineStore } from "pinia";

const modeFromStorage = localStorage.getItem("mode")
  ? JSON.parse(localStorage.getItem("mode") || "")
  : "light";

export const useSwitchMode = defineStore("switchMode", {
  state: () => ({
    mode: modeFromStorage,
  }),
  actions: {
    toggleSwitchMode(payload: string) {
      this.mode = payload;
      localStorage.setItem("mode", JSON.stringify(payload));
    },
  },
});
