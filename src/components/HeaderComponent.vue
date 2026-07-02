<script setup lang="ts">
import { useRoute } from "vue-router";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "MMA", to: "/mma" },
  { name: "BJJ", to: "/bjj" },
]

</script>
<template>
  <header class="flex justify-between">
    <RouterLink to="/">
      <h2>MyMMA</h2>
    </RouterLink>
    <nav
      class="*:hover:text-primary *:hover:ease-in *:hover:duration-75 *:hover:transition-all flex flex-nowrap gap-2 items-center h-max my-auto *:font-semibold">
      <RouterLink v-for="l in links" :key="l.name" :to="l.to"
        :class="useRoute().name?.toString().toLocaleLowerCase() == l.name.toLocaleLowerCase() ? 'border-b border-primary' : ''">{{
          l.name }}</RouterLink>
    </nav>
  </header>
</template>
