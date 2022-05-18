<script setup>
import { useDiceStore } from "../stores/diceStore";
const store = useDiceStore();

let useReset = () => {
  store.reset();
};
</script>

<template>
  <div class="logArea" id="logArea">
    <h3>Roll Log</h3>
    <br />
    <ul>
      <li v-for="log in store.results" :key="log">
        {{ log }}
      </li>
    </ul>

    <button @click="useReset" class="resetBtn">Reset</button>
  </div>
</template>

<style></style>
