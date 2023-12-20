<template>
  <main class="home-container">
    <SidePanel />
    <div class="posts-wrapper">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </main>
</template>

<script setup lang="ts">
import Post from "../components/Post.vue";
import SidePanel from "../components/SidePanel.vue";
</script>
