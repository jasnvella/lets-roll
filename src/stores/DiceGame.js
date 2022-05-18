import moment from "moment";
import { defineStore } from "pinia";
export const useStore = defineStore("main", {
  state: () => {
    return {
      dice1: null,
      dice2: null,
      results: [],
    };
  },

  actions: {
    rollDice() {
      let i = this.results.length + 1;
      this.dice1 = Math.floor(Math.random() * 6) + 1;
      this.dice2 = Math.floor(Math.random() * 6) + 1;
      this.results.push(
        `Entry ${i} : ${this.dice1} + ${this.dice2} = ${
          this.dice1 + this.dice2
        } (${this.date})`
      );
    },

    reset() {
      var ul = document.getElementById("list");
      ul.innerHTML = "";
      //Change value of dice1 & dice2
      this.dice1 = "-";
      this.dice2 = "-";
      this.results = [];
    },
  },
});
