<template>
  <section id="projects">
    <ul>
      <li>
        <div class="text-wrapper">
          <h2>Business</h2>
          <p>I'm CEO of Hyperstonk.</p>
          <p>Here's all i know about business</p>
        </div>
        <div class="image-wrapper">
          <div class="image" />
        </div>
      </li>
      <li>
        <div class="text-wrapper">
          <h2>3D Design</h2>
          <p>I model, paint and texture characters to give them life.</p>
        </div>
        <div class="image-wrapper">
          <div class="image" />
        </div>
      </li>
      <li>
        <div class="text-wrapper">
          <h2>Photo</h2>
          <p>
            Nique oit sale bg, en vrai avoue c'est stylé de dev, emoji coquain,
            emoji scream.
          </p>
        </div>
        <div class="image-wrapper">
          <div class="image" />
        </div>
      </li>
      <li>
        <div class="text-wrapper">
          <h2>Video</h2>
          <p>
            Whallah je suis trop chaud en video zeb, avoue t'as le seum maxi bg
          </p>
        </div>
        <div class="image-wrapper">
          <div class="image" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.image-wrapper {
  background-color: #fff;
  width: 1101px;
  height: 680.47px;
}

.text-wrapper {
  width: 623px;
  margin-top: 110px;
}

li {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 26px;
  gap: 120px;
}

h2 {
  font-size: 110px;
  text-transform: uppercase;
}

p {
  font-size: 40px;
  line-height: 1.1;
}
</style>
