<script setup lang="ts">
// TODO: create headline component for this view
</script>
<template>
  <div class="max-w-7xl mx-auto">
    <!-- FIGHER(S) HEADLINE -->
    <div
      class="**:uppercase flex flex-row pt-2 rounded-b-xl bg-linear-to-b to-primary to-20% from-transparent from-10% via-primary/50 via-100%"
    >
      <div id="headline-text" class="p-4 max-w-md flex flex-col">
          <p class="text-7xl font-bold">Featured MMA Fighters</p><br/>
          <p class="text-2xl max-w-sm text-muted">These fighters are currently the best in the business</p>
          <button id="headline-navigate-mma" class="mt-6 self-start font-semibold">
            <RouterLink to="/mma" class=" text-white px-4 py-2 hover:pl-4 pl-0 rounded-lg hover:bg-primary/80 transition-all duration-75 ease-in underline">Navigate to MMA</RouterLink>
          </button>
      </div>
      <div id="headline-fighters" class="flex flex-row *:-m-8 *:mt-2 overflow-y-clip place-self-end">
        <img src="/fighter-image-1.png" alt="Logo" class="w-xs object-bottom object-scale-down" /><p class="-translate-x-10 z-auto font-bold">Alex Pereira</p>
        <img src="/fighter-image-2.png" alt="Logo" class="w-xs object-bottom object-scale-down" /><p class="-translate-x-10 z-auto font-bold">Justin Gaethje</p>
        <img src="/fighter-image-3.png" alt="Logo" class="w-xs object-bottom object-scale-down" /><p class="-translate-x-10 z-auto font-bold">Islam Makhachev</p>
      </div>
    </div>
  </div>
</template>
