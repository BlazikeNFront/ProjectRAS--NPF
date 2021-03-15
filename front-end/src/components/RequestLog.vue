<template>
  <section class="requestsLog">
    <div class="requestsLog__buttonsBox">
      <button class="requestsLog__button" @click="toggleRequestsLog">
        {{ toggleButtonText }}
      </button>
      <button
        class="requestsLog__button"
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
  padding: 3rem;
  width: 90%;
  max-width: 70rem;
}
.requestsLog__buttonsBox {
  @include flexLayout;
  justify-content: space-evenly;
}
.requestsLog__button {
  margin-top: 1rem;
  width: 17rem;
  background: white;
  border: none;
  border-radius: 5px 5px;
  font-weight: 700;
  font-family: inherit;
  padding: 1rem;
}
.requestList {
  @include flexLayout;
  flex-direction: column;
  margin: 1.5rem;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
}
</style>