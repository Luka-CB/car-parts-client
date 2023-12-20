<template>
  <nav class="navigation">
    <div class="col1">
      <div class="go-back-btn" v-if="shouldShow">
        <BackBtn />
      </div>
      <div class="logo">
        <RouterLink :to="{ name: 'home' }">
          <h3>Space Blog</h3>
        </RouterLink>
      </div>
      <SearchBar v-if="!shouldShow" />
      <div class="links" v-if="!shouldShow">
        <RouterLink :to="{ name: 'create' }" class="link">
          <span>Create Post</span>
        </RouterLink>
        <RouterLink :to="{ name: 'about' }" class="link">
          <span>About Us</span>
        </RouterLink>
        <RouterLink :to="{ name: 'contact' }" class="link">
          <span>Contact</span>
        </RouterLink>
      </div>
    </div>
    <div class="col2">
      <RouterLink :to="{ name: 'login' }">
        <div class="auth-wrapper" v-if="!shouldShow">
          <span>Login</span>
        </div>
      </RouterLink>
      <ToggleSwitch />
    </div>
  </nav>
</template>

<script setup lang="ts">
import SearchBar from "./SearchBar.vue";
import ToggleSwitch from "./ToggleSwitch.vue";
import BackBtn from "./BackBtn.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const routeNames = ["login", "register"];

const route = useRoute();

const shouldShow = computed(() => routeNames.includes(route.name as string));
</script>
