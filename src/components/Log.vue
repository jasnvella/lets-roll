<script setup>
import { useStore } from "@/stores/DiceGame";
const store = useStore();

methods: {
}
</script>

<template>
  <div class="logArea" id="logArea">
    <h3>Roll Log</h3>
    <br />
    <ul id="list">
      <li :class="results"></li>
    </ul>

    <button class="resetBtn" @click="store.reset()">Reset</button>
  </div>
</template>

<style>
.logArea {
  background-color: #fff;
  text-decoration: underline;
  min-height: 200px;
  padding: 30px;
  border-radius: 10px;
  position: relative;
}

.resetBtn,
.resetBtn:visited {
  background-color: #d9534f;
  width: fit-content;
  font-size: 14px;
  color: #fff;
  padding: 0.5rem 2.5rem;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  transition: all 0.3s;
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.resetBtn:hover,
.resetBtn:active {
  background-color: #c94f4a;
}
</style>
