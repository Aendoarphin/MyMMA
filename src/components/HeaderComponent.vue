<script setup lang="ts">
import { useRoute } from "vue-router";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "MMA", to: "/mma" },
  { name: "BJJ", to: "/bjj" },
]
const dev = import.meta.env.DEV;
const appName = import.meta.env.VITE_APPNAME;

</script>
<template>
  <header class="flex justify-between">
    <p v-if="dev" class="fixed left-0 top-0 text-xs text-red-500">Development Mode</p>
    <RouterLink to="/">
      <h2>{{ appName }}</h2>
    </RouterLink>
    <nav
      class="*:hover:text-primary *:hover:ease-in *:hover:duration-75 *:hover:transition-all flex flex-nowrap gap-2 items-center h-max my-auto *:font-semibold">
      <RouterLink v-for="l in links" :key="l.name" :to="l.to"
        :class="useRoute().name?.toString().toLocaleLowerCase() == l.name.toLocaleLowerCase() ? 'border-b border-primary' : ''">{{
          l.name }}</RouterLink>
    </nav>
  </header>
</template>
