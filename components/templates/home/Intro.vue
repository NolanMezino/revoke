<template>
  <section id="intro">
    <h1 class="title">Revoke</h1>
    <p class="copy">
      To my Alzheimered self: I document what I do, why I do it and how I do it
      so you can remember who you are.
    </p>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
#intro {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 600px;
  margin-bottom: 26px;
}

.title {
  font-size: 174.004px;
  text-transform: uppercase;
}

.copy {
  width: 623px;
  font-size: 40px;
  line-height: 1.1;
}
</style>
