<template>
  <div class="home-images"></div>
</template>

<script lang="ts" setup>
const route = useRoute();
console.log("route name: ", route.name);
</script>

<style lang="scss">
body {
  background-color: #000;
}

.home-images {
  position: absolute;
  background-color: #fff;
  max-width: fit-content;
  min-width: 150px;
}
</style>
