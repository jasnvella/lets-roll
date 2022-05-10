<script setup>
import Title from "./components/Title.vue";
import Dice from "./components/Dice.vue";
import Log from "./components/Log.vue";
import { useStore } from "@/stores/DiceGame";

console.log(useStore());

const store = useStore();
</script>

<template>
  <Title />
  <Dice />
  <Log />
</template>

<style>
* {
  font-family: "Montserrat";
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f7f7f7;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 3rem;
}

li {
  list-style: none;
}

#app {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
