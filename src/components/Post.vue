<template>
  <main class="post">
    <section class="post-header">
      <h1 id="title">here goes title</h1>
      <div class="option">
        <i class="fa-solid fa-ellipsis-vertical option-icon"></i>
      </div>
    </section>
    <section class="post-body">
      <div class="image">
        <img :src="DummyPart" alt="part" />
      </div>
      <div class="details">
        <div class="text">
          <h3>Price: <span>590.50</span></h3>
          <h3>Name: <span>Lorem ipsum dolor sit amet.</span></h3>
          <h3>Name: <span>Lorem ipsum dolor sit amet consectetur.</span></h3>
          <h3>Name: <span>Lorem, ipsum.</span></h3>
          <h3>Name: <span>Lorem ipsum dolor sit.</span></h3>
        </div>
        <button class="btn">Choose Visit Time</button>
      </div>
    </section>
    <section class="post-footer">
      <div class="col1">
        <div class="like">
          <div class="icons">
            <i
              class="fa-regular fa-thumbs-up like-icon"
              v-if="likes?.length === 0"
            ></i>
            <i class="fa-solid fa-thumbs-up like-icon" v-else></i>
          </div>
          <span id="value">{{ likes?.length }}</span>
        </div>
        <div class="dislike">
          <div class="icons">
            <i
              class="fa-regular fa-thumbs-down dislike-icon"
              v-if="dislikes?.length === 0"
            ></i>
            <i class="fa-solid fa-thumbs-down dislike-icon" v-else></i>
          </div>
          <span id="value">{{ dislikes?.length }}</span>
        </div>
      </div>
      <div class="col2">
        <div class="comments">
          <div class="icons">
            <i
              class="fa-regular fa-comments comments-icon"
              v-if="comments?.length === 0"
            ></i>
            <i class="fa-solid fa-comments comments-icon" v-else></i>
          </div>
          <span id="value">{{ comments?.length }}</span>
        </div>
        <div class="views">
          <div class="icons">
            <i
              class="fa-regular fa-eye views-icon"
              v-if="views?.length === 0"
            ></i>
            <i class="fa-solid fa-eye views-icon" v-else></i>
          </div>
          <span id="value">{{ views?.length }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePostState } from "../store/post";
import DummyPart from "../assets/images/dummy-parts.jpg";

const postState = usePostState();
const { likes, dislikes, comments, views } = storeToRefs(postState);
</script>
