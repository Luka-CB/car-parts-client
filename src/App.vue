<template>
  <div class="container" :data-theme="mode">
    <NavigationMain />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import NavigationMain from "./components/NavigationMain.vue";
import { useSwitchMode } from "./store/switchMode";

const switchMode = useSwitchMode();
const { mode } = storeToRefs(switchMode);
</script>
