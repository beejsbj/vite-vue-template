<script setup>
import { useCounterStore } from "../stores/counter.js";
const counter = useCounterStore();
</script>

<template>
  <h1 class="loud-voice">This is a Componenet</h1>
  <counter-app>
    <button @click="counter.increment">
      Click to Count: {{ counter.count }}
    </button>
    <p>Double count: {{ counter.doubleCount }}</p>
  </counter-app>
</template>
