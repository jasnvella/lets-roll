<script setup>
import Title from "./components/Title.vue";
import Log from "./components/Log.vue";
import Dice from "./components/Dice.vue";
import { useDiceStore } from "./stores/diceStore";
</script>

<template>
  <Title />
  <Dice />
  <Log />
</template>

<style>
@import "../src/main.css";
</style>
