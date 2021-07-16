<template>
  <div class="information-container__box__devices">
    <h4>{{ data.textContent }}</h4>
    <div class="information-container__InfoDisplay" v-if="data.dataInfo">
      <p class="information-container__p">
        {{ data.dataInfo }}
      </p>
      <checkbox
        class="information__container__devices__checkbox"
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
  top: -1rem;
  left: -5rem;
  transform: scale(0.4);
}
.information-container__box__devices {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem;
  border: 3px solid white;
  border-radius: 10px;
  padding: 3rem;
  width: 90%;
  max-width: 50rem;
}
.information-container__InfoDisplay {
  @include flexLayout;
  position: relative;
}
.information__container__devices__checkbox {
  transform: scale(0.8);
}
@media (min-width: 425px) {
  .information-container__smallLoader {
    top: -1rem;
    left: -6rem;
    transform: scale(0.5);
  }
  .information-container__box__devices {
    width: 100%;
    padding: 2rem;
  }
}
</style>
