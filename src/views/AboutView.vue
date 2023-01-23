<script setup>
import { useCounterStore } from "../stores/counter.js";
import HelloWorld from "../components/HelloWorld.vue";

const counter = useCounterStore;
</script>

<template>
  <section>
    <inner-column>
      <HelloWorld msg="You did it! Made it to About" />
    </inner-column>
  </section>
  <section>
    <inner-column>
      <h1>This is an about page</h1>
      <p>Pinia stores data across views</p>
      <p>Double count: {{ counter.doubleCount }}</p>
    </inner-column>
  </section>
</template>

<style></style>
