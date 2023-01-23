<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <inner-column>
      <picture> <img class="logo" src="@/assets/logo.svg" /></picture>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </inner-column>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <inner-column>
      <h2 class="attention-voice">Footer</h2>
    </inner-column>
  </footer>
</template>

<style scoped>
header {
  background: green;
}
header inner-column {
  display: flex;
  justify-content: space-between;
}
header picture {
  max-width: 60px;
}

nav {
  display: flex;
  gap: 5px;
}
</style>
