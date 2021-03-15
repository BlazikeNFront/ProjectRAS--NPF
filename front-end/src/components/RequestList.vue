<template>
  <li class="singleRequestBox">
    <p class="singleRequest">{{ date }}</p>
    <button class="singleRequest__button" @click="toggleDetails">
      Check Details
    </button>
    <teleport to="body" v-if="showDetails">
      <div class="singleRequest__detailsBox">
        <div class="singleRequest__backdrop" @click="closeDetailView"></div>
        <div class="singleRequest__details">
          <button class="singleRequest__closeButton" @click="closeDetailView">
            X
          </button>
          <ul class="singleRequest__List">
            <li
              class="singleRequest__listElement"
              v-for="(value, device) in this.data.changes"
              :key="device"
            >
              <h4>{{ device }}</h4>
              <div class="singleRequest__changes">
                <p class="singleRequest__state" :class="computeClass(value[0])">
                  {{ deviceState(value[0]) }}
                </p>
                <span>--></span>
                <p class="singleRequest__state" :class="computeClass(value[1])">
                  {{ deviceState(value[1]) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </teleport>
    <div class="singleRequest__result">
      <ok-checkmark v-if="this.data.result"></ok-checkmark>
      <danger-checkmark v-else></danger-checkmark>
    </div>
  </li>
</template>
<script>
import OkCheckmark from "./util/OkIcon.vue";
import DangerCheckmark from "./util/DangerIcon.vue";

export default {
  components: {
    OkCheckmark,
    DangerCheckmark,
  },
  props: ["data"],

  data() {
    return {
      showDetails: false,
    };
  },

  computed: {
    date() {
      const data = this.data.date.split(",")[1];
      return data;
    },
  },

  methods: {
    toggleDetails() {
      this.showDetails = true;
    },
    closeDetailView() {
      this.showDetails = false;
    },
    deviceState(boolean) {
      if (boolean === true) {
        return "ON";
      } else {
        return "OFF";
      }
    },
    computeClass(val) {
      if (val === true) {
        return "singleRequest__changes--on";
      } else {
        return "singleRequest__changes--off";
      }
    },
  },
};
</script>
<style lang="scss">
.singleRequestBox {
  @include flexLayout;
  padding: 1rem;
  margin: 0.5rem;
  border: 2px solid grey;
  width: 100%;
}
.singleRequest {
  font-size: $font-md;
  font-weight: 700;
}
.singleRequest__detailsBox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  font-family: $mainFont;
}
.singleRequest__backdrop {
  z-index: 200;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}
.singleRequest__button {
  margin-top: 1rem;
  width: 10rem;
  background: white;
  border: 2px solid #2c3e50;
  font-size: $font-md;
  border-radius: 50px;
  cursor: pointer;
  @include mainFontBold;
  font-family: inherit;
  color: #2c3e50;
  padding: 0.5rem 1rem;
  @media (max-width: 550px) {
    padding: 0.25rem 0.5;
    font-size: $font-sm;
  }
}
.singleRequest__details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 250;
  width: 40rem;
  border: 2px solid #2c3e50;
  border-radius: 10px;
  background-color: white;
}
.singleRequest__closeButton {
  position: relative;
  top: 0.5rem;
  left: 81%;
  background: white;
  border: 2px solid #2c3e50;
  font-size: 1.5rem;
  border-radius: 50px;
  font-family: inherit;
  color: #2c3e50;
  padding: 0.25rem 1rem;
  z-index: 260;
  cursor: pointer;
  @media (max-width: 550px) {
    font-size: $font-sm;
  }
}

.singleRequest__listElement {
  @include flexLayout;
  flex-direction: column;
  position: relative;
  top: -1rem;
}
.singleRequest__changes {
  @include flexLayout;
  margin: 0.5rem;
  width: 50%;
  font-size: $font-md;
}
.singleRequest__state {
  padding: 0.5rem;
  border-radius: 10px;
}
.singleRequest__changes--on {
  background-color: rgba(4, 190, 4, 0.5);
}
.singleRequest__changes--off {
  background-color: rgba(245, 77, 77, 0.5);
}
</style>
