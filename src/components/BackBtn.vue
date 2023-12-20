<template>
  <button class="back-btn" @click="router.go(-1)">
    <i class="material-icons arrow-icon">arrow_back</i>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped>
.back-btn {
  border: none;
  background-color: rgb(226, 241, 241);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.242);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.back-btn .arrow-icon {
  font-size: 2.5rem;
  color: rgb(99, 99, 99);
  transition: 0.1s ease;
}

.back-btn:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.096);
  background-color: rgb(230, 255, 255);
}
.back-btn:hover > .arrow-icon {
  font-size: 2rem;
}
.back-btn:active {
  box-shadow: none;
  background-color: rgb(223, 231, 231);
  transform: scale(0.95);
}
.back-btn:active > .arrow-icon {
  font-size: 1.7rem;
  color: gray;
}
</style>
