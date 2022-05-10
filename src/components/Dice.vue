<script setup>
import { useStore } from "@/stores/DiceGame";
const store = useStore();
</script>

<template>
  <div class="score">
    <div id="dice1">{{ store.dice1 }}</div>
    <div id="dice2">{{ store.dice2 }}</div>
  </div>
  <button class="rollBtn" @click="store.rollDice(), store.addLog()">
    Roll
  </button>
</template>

<style>
.score {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}

#dice1,
#dice2 {
  background-color: #0275d8;
  color: #fff;
  width: 300px;
  height: 300px;
  font-size: 90px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
}

.rollBtn,
.rollBtn:visited {
  background-color: #5cb85c;
  width: fit-content;
  font-size: 20px;
  color: #fff;
  padding: 1rem 2.5rem;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: all 0.3s;
}

.rollBtn:hover,
.rollBtn:active {
  background-color: #50a350;
}
</style>
