<template>
  <div class="score">
    <div class="dice">{{ getDiceValue1 }}</div>
    <div class="dice">{{ getDiceValue2 }}</div>
  </div>
  <button @click="rollDice" class="rollBtn">Roll</button>
</template>

<script>
import { useDiceStore } from "../stores/diceStore";
import moment from "moment";

export default {
  data() {},
  methods: {
    rollDice() {
      const store = useDiceStore();

      let i = store.results.length + 1;
      store.dice1 = Math.floor(Math.random() * 6) + 1;
      store.dice2 = Math.floor(Math.random() * 6) + 1;
      store.results.push(
        `Entry ${i} : ${store.dice1} + ${store.dice2} = ${
          store.dice1 + store.dice2
        } (${moment().format("dddd Do MMMM YYYY hh:mm")})`
      );
    },
  },
  computed: {
    getDiceValue1() {
      const store = useDiceStore();

      return store.dice1 ? store.dice1 : "-";
    },
    getDiceValue2() {
      const store = useDiceStore();

      return store.dice2 ? store.dice2 : "-";
    },
  },
};
</script>

<style></style>
