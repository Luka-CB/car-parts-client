import { defineStore } from "pinia";

export const usePostState = defineStore("postState", {
  state: () => ({
    likes: [],
    dislikes: [],
    comments: [],
    views: [],
  }),
});
