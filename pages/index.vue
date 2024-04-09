<template>
  <H1 class="revoke">revoke</H1>
  <p class="introduction">
    To my Alzheimered self:<br />I document what I do, why I do it<br />and how
    I do it so you can<br />remember who you are.
  </p>
  <div class="half-page">
    <div class="title-list">
      <div class="columns-title">
        <h1>Business</h1>
      </div>
      <div class="columns-title">
        <h1>3D design</h1>
      </div>
      <div class="columns-title">
        <h1>Photo</h1>
      </div>
      <div class="columns-title">
        <h1>video</h1>
      </div>
    </div>

    <div class="home-images">
      <div class="columns-images">
        <div class="images"></div>
      </div>

      <div class="columns-images">
        <div class="images"></div>
      </div>
      <div class="columns-images">
        <div class="images"></div>
      </div>
      <div class="columns-images">
        <div class="images"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  overflow-x: hidden;
  background-color: #000;
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

h1 {
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 110px;
  text-transform: uppercase;
}

.revoke {
  position: relative;
  margin-bottom: -180px;
  margin-top: 0;
  left: 827px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 180px;
  color: #fff;
  text-transform: uppercase;
}

.introduction {
  position: relative;
  margin-left: 12px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  padding-bottom: 26px;
}

.home-images {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 248px;
}

.columns-images {
  margin-bottom: 26px;
}

.images {
  background-color: #fff;
  min-width: 1020px;
  max-width: 1020px;
  min-height: 630px;
  max-height: 630px;
}

.title-list {
  position: static;
  display: flex;
  flex-direction: column;
  left: 26px;
}

.columns-title {
  flex-direction: column;
}

.half-page {
  display: flex;
  flex-direction: rows;
}
</style>
