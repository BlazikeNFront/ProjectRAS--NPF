<template>
  <div class="information-container__box__autoControl">
    <p class="information-container__box_p">AutoControl :</p>
    <div
      class="&quot;information-container__InfoDisplay"
      v-if="this.autoControl"
    >
      <div
        class="
          protocolBox__checkmarkIconBox
          protocolBox__checkmarkIconBox--autoControl
        "
      >
        <span class="protocolBox__checkmarkIcon"></span>
      </div>
    </div>
    <div v-else>
      <div
        class="
          protocolBox__dangerIconBox protocolBox__checkmarkIconBox--autoControl
        "
      >
        <span class="protocolBox__dangerIcon"></span>
      </div>
    </div>
    <checkbox
      class="information-container__autocontrol__checkbox"
      @change="toggleSocket('autoControl')"
      :check="autoControl"
      :token="token"
    ></checkbox>
  </div>
</template>
<script>
import Checkbox from "./Checkbox.vue";
export default {
  components: {
    Checkbox,
  },

  emits: ["change"],
  computed: {
    autoControl() {
      return this.$store.getters["getAutoControl"];
    },
    token() {
      return this.$store.getters["getToken"];
    },
  },
  methods: {
    toggleSocket() {
      if (!this.token) {
        return;
      }
      this.$store.dispatch("toggleAutoControl");
    },
  },
};
</script>
<style lang="scss">
.information-container__box__autoControl {
  position: relative;
  margin: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 50rem;
  border: 3px solid white;
  border-radius: 10px;
  background: white;
  box-shadow: 5px 5px 10px black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.information-container__box_p {
  @include mainFontBold;
}
.protocolBox__checkmarkIconBox--autoControl {
  margin-left: 2rem;
}
.information-container__autocontrol__checkbox {
  margin-left: 5%;
  transform: scale(0.8);
}
@media (min-width: 425px) {
  .information-container__autocontrol__checkbox {
    transform: scale(1);
  }
}
</style>