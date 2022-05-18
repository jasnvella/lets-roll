import { defineStore } from "pinia";

export const useDiceStore = defineStore("dice", {
  state: () => {
    return {
      dice1: null,
      dice2: null,
      results: [],
    };
  },
  actions: {
    reset() {
      this.dice1 = null;
      this.dice2 = null;
      this.results = [];
    },
  },
});
