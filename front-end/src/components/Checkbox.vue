<template>
  <label class="switch" v-if="this.token">
    <input
      type="checkbox"
      :class="{ checked: this.check, checkboxAnimation: this.check }"
    />
    <span class="slider round" :class="{ checked: this.check }"></span>
  </label>
</template>


<script>
export default {
  props: {
    check: {
      require: true,
    },
    token: {
      required: true,
    },
  },
};
</script>




<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 6rem;
  height: 3.4rem;
}

.switch input {
  display: none;
}

.slider {
  width: 6rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 2.6rem;
}

.slider:before {
  position: absolute;
  content: "";
  height: 2.6rem;
  width: 2.6rem;
  left: 0.4rem;
  bottom: 0.4rem;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}
.checked {
  background-color: #2196f3;
}
.checkboxAnimation + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>