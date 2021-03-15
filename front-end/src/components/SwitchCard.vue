<template>
  <div class="information-container__box">
    <h4>{{ data.textContent }}</h4>
    <div class="&quot;information-container__InfoDisplay" v-if="data.dataInfo">
      <p class="information-container__p">
        {{ data.dataInfo }}
      </p>
      <checkbox
        @change="toggleSocket(data)"
        :check="data.state"
        :token="token"
      ></checkbox>
      <small-loader
        class="information-container__smallLoader"
        v-if="requested"
      ></small-loader>
    </div>
    <loader class="information-container__loader" v-else></loader>
  </div>
</template>
<script>
import SmallLoader from "./util/loader.vue";
export default {
  components: { SmallLoader },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    token() {
      return this.$store.getters["getToken"];
    },
    requested() {
      const device = this.data.name;
      return this.$store.getters.getRequestedValue(device);
    },
  },
  methods: {
    toggleSocket(device) {
      if (!this.token) {
        return;
      }
      device.state = !device.state;
      const payload = {
        name: device.name,
        state: device.state,
      };

      this.$store.dispatch("toggleDevice", payload);
    },
  },
};
</script>
<style lang="scss">
.information-container__smallLoader {
  position: relative;
  top: -4rem;
  transform: scale(0.7);
}
</style>
