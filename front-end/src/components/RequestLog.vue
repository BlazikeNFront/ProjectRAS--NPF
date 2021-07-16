<template>
  <section class="requestsLog">
    <div class="requestsLog__buttonsBox">
      <button class="requestsLog__button" @click="toggleRequestsLog">
        {{ toggleButtonText }}
      </button>
      <button
        class="requestsLog__button requestsLog__button--refresh"
        v-if="showList"
        @click="fetchRequestLogData"
      >
        Refresh
      </button>
    </div>
    <ul class="requestList" v-if="showList">
      <request-list
        v-for="request in requestLogData"
        :key="request._id"
        :data="request"
      ></request-list>
    </ul>
  </section>
</template>
<script>
import RequestList from "./RequestList.vue";

export default {
  components: { RequestList },

  data() {
    return {
      showList: false,
    };
  },
  methods: {
    toggleRequestsLog() {
      this.showList = !this.showList;
    },
    fetchRequestLogData() {
      this.$store.dispatch("setRequstLogData");
    },
  },
  computed: {
    toggleButtonText() {
      let text;
      this.showList === true
        ? (text = "Hide Requests Log")
        : (text = "Show requests Log");
      return text;
    },
    requestLogData() {
      return this.$store.getters["getRequestLog"];
    },
  },
};
</script>
<style lang="scss">
.requestsLog {
  padding: 2rem 1rem;
  width: 100%;
  max-width: 70rem;
  min-width: 32rem;
}
.requestsLog__buttonsBox {
  @include flexLayout;
  justify-content: space-evenly;
}
.requestsLog__button {
  margin: 0 auto;
  padding: 0.5rem;
  width: 11rem;
  background: white;
  border: none;
  border-radius: 5px 5px;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: inherit;
}

.requestList {
  @include flexLayout;
  margin: 1.5rem;
  padding: 1rem 0.5rem;
  border-radius: 10px;
  background-color: white;
  flex-direction: column;
}
@media (min-width: 515px) {
  .requestsLog__button {
    margin: 0 auto;
    padding: 1rem;
    width: 17rem;
    background: white;
    border: none;
    border-radius: 5px 5px;
    font-weight: 700;
    font-family: inherit;
  }
}
</style>