<template>
  <div
    class="moon-icon-wrapper"
    v-if="mode === 'light'"
    title="switch to dark mode"
    @click="toggleSwitchMode('dark')"
  >
    <i class="fa-solid fa-sun sun-icon"></i>
    <i class="fa-solid fa-moon moon-icon"></i>
  </div>
  <div
    class="sun-icon-wrapper"
    v-else
    title="switch to light mode"
    @click="toggleSwitchMode('light')"
  >
    <i class="fa-solid fa-moon moon-icon"></i>
    <i class="fa-solid fa-sun sun-icon"></i>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useSwitchMode } from "../store/switchMode";

const switchMode = useSwitchMode();
const { mode } = storeToRefs(switchMode);
const { toggleSwitchMode } = switchMode;
</script>

<style scoped>
.moon-icon-wrapper,
.sun-icon-wrapper {
  cursor: pointer;
  margin: 0 10px;
}

.sun-icon-wrapper .moon-icon {
  font-size: 1rem;
  color: #f9af02;
  margin-right: 5px;
}
.sun-icon-wrapper .sun-icon {
  font-size: 1.5rem;
  color: #ececec64;
  transition: all 0.2s ease-in-out;
}

.sun-icon-wrapper:hover > .sun-icon {
  color: #ecececdd;
}

.moon-icon-wrapper .sun-icon {
  font-size: 1rem;
  color: #f9af02;
  margin-right: 5px;
}
.moon-icon-wrapper .moon-icon {
  font-size: 1.5rem;
  color: #191a1b64;
  transition: all 0.2s ease-in-out;
}

.moon-icon-wrapper:hover > .moon-icon {
  color: #191a1bd3;
}
</style>
