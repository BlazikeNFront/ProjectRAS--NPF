<template>
  <div class="information-container__box">
    <h4>{{ data.textContent }}</h4>
    <p class="information-container__p" v-if="data.dataInfo">
      {{ data.dataInfo }}
    </p>
    <loader class="information-container__loader" v-else></loader>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.information-container__box {
  position: relative;
  margin: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 50rem;
  border: 3px solid white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
}

.information-container__p {
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
}
.information-container__loader {
  @include flexLayout;
  transform: scale(0.7);
  width: 50%;
  height: 100%;
}
</style>