<template>
  <section class="informationContainer__protocolBox">
    <div class="protocolBox__text">
      <h4 class="protocolBox__h4">Current protocol:</h4>

      <p
        class="informationContainer__protocolInformation"
        v-if="this.currentProtocol.dataInfo"
      >
        {{ this.currentProtocol.dataInfo }}
      </p>

      <loader class="information-container__protocolLoader" v-else></loader>
    </div>
    <div
      class="protocolBox__dangerIconBox"
      v-if="this.currentProtocol.state !== 0"
    >
      <span class="protocolBox__dangerIcon"></span>
    </div>
    <div class="protocolBox__checkmarkIconBox" v-else>
      <span class="protocolBox__checkmarkIcon"></span>
    </div>
  </section>
</template>
<script>
import Loader from "./loader.vue";

export default {
  components: {
    Loader,
  },
  props: {
    currentProtocol: {
      require: true,
      type: Object,
    },
  },
};
</script>
<style lang='scss'>
.informationContainer__protocolBox {
  @include flexLayout;
  justify-content: space-around;
  background-color: white;
  padding: 3rem;
  width: 100%;
  max-width: 50rem;
  min-height: 7rem;
  border-radius: 20px;
  box-shadow: 5px 5px 10px black;
}
.protocolBox_text {
  width: 80%;
}
.protocolBox__h4 {
  font-size: $font-bg;
}
.protocolBox__dangerIconBox {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: red;
}
.protocolBox__dangerIcon {
  position: relative;

  &:before {
    content: "";
    width: 0.7rem;
    height: 2rem;
    background-color: white;
    position: absolute;
    top: 0.5rem;
    transform: translate(-50%);
    border-radius: 5px;
  }
  &:after {
    content: "";
    width: 0.7rem;
    height: 0.7rem;
    background-color: white;
    position: absolute;
    top: 2.7rem;
    transform: translate(-50%);
    border-radius: 50%;
  }
}
.protocolBox__checkmarkIconBox {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: green;
}
.protocolBox__checkmarkIcon {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 0.5rem;
    border-radius: 10px 0px 0px 10px;
    background-color: white;
    transform: translate(-1.1rem, 2.1rem) rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    width: 2rem;
    height: 0.5rem;
    border-radius: 0px 10px 10px 0;
    background-color: white;
    transform: translate(-0.8rem, 1.8rem) rotate(-45deg);
  }
}

.informationContainer__protocolInformation {
  @include mainFontBold;
  margin-top: 1rem;
  font-size: 1.5rem;
}
.information-container__protocolLoader {
  @include flexLayout;
  margin-top: 2rem;
  width: 100%;
  height: 100%;
  transform: scale(0.8);
}
</style>
