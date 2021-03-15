<template>
  <div
    class="information-container__box information-container__box__autoControl"
  >
    <h4>AutoControl :</h4>
    <div
      class="&quot;information-container__InfoDisplay"
      v-if="this.autoControl"
    >
      <div
        class="protocolBox__checkmarkIconBox protocolBox__checkmarkIconBox--autoControl"
      >
        <span class="protocolBox__checkmarkIcon"></span>
      </div>
    </div>
    <div v-else>
      <div
        class="protocolBox__dangerIconBox protocolBox__checkmarkIconBox--autoControl"
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
import Checkbox from "./toggleCheckbox.vue";
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
  padding: 2rem;
  align-items: center;
  & h4 {
    @media (max-width: 415px) {
      font-size: 1.5rem;
    }
  }
}
.protocolBox__checkmarkIconBox--autoControl {
  margin-left: 2rem;
}
.information-container__autocontrol__checkbox {
  margin-left: 5%;
}
</style>