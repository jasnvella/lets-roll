import moment from "moment";
import { defineStore } from "pinia";
export const useStore = defineStore("main", {
  state: () => {
    return {
      date: moment().format("dddd Do MMMM YYYY hh:mm"),
      dice1: "-",
      dice2: "-",
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
      console.log(this.results);
    },

    reset() {
      var ul = document.getElementById("list");
      ul.innerHTML = "";
      //Change value of dice1 & dice2
      this.dice1 = "-";
      this.dice2 = "-";
      this.results = [];
    },
    addLog() {
      let i = this.results.length;
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      li.appendChild(
        document.createTextNode(
          `Entry ${i}: ${this.dice1} + ${this.dice2} = ${
            this.dice1 + this.dice2
          } (${this.date})`
        )
      );
      ul.appendChild(li);
    },
  },
});
