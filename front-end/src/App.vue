<template>
  <user-auth></user-auth>
  <div class="container">
    <the-header></the-header>

    <main>
      <section class="information-container">
        <chart></chart>
        <protocol-info
          :currentProtocol="getRasInfo.currentProtocol"
        ></protocol-info>

        <auto-control
          :autoControl="getRasInfo.autoControl"
          :token="token"
        ></auto-control>

        <basic-card :data="getRasInfo.waterLevel"></basic-card>
        <basic-card :data="getRasInfo.temperature"></basic-card>

        <switch-card
          v-for="pump in getRasInfo.pumps"
          :key="pump.name"
          :data="pump"
        ></switch-card>
        <request-log></request-log>
      </section>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import UserAuth from "./components/userAuth.vue";
import ProtocolInfo from "./components/protocolInfo.vue";
import Chart from "./components/chart.vue";
import AutoControl from "./components/AutoControl.vue";
import BasicCard from "./components/BasicCard.vue";
import SwitchCard from "./components/SwitchCard.vue";
import RequestLog from "./components/RequestLog.vue";

export default {
  name: "App",
  components: {
    ProtocolInfo,
    UserAuth,
    TheHeader,
    Chart,
    AutoControl,
    RequestLog,
    BasicCard,
    SwitchCard,
  },

  mounted() {
    this.$store.dispatch("setRequstLogData");
    this.$store.dispatch("fetchRasInfo");
    this.$store.dispatch("createSocketConnection");
    this.$store.dispatch("setListenerForSockerEvents");
    const io = this.$store.getters["getSocket"];
    io.on("currentState", (data) => {
      this.$store.dispatch("handleSocketData", data);
    });
  },
  data() {
    return {};
  },
  computed: {
    getRasInfo() {
      return this.$store.getters["getRASInformation"];
    },
    token() {
      return this.$store.getters["getToken"];
    },
  },
};
</script>

<style lang='scss'>
*,
*::before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#demo {
  position: relative;
  margin: 5rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: $primary-color;
}
.container {
  position: relative;
  @include centerWithTranslate;
  width: 90%;
  overflow: hidden;
  max-width: 120rem;
  z-index: 1;
}

.information-container__loader {
  @include flexLayout;
  transform: scale(0.7);
  width: 50%;
  height: 100%;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}
button {
  cursor: pointer;
  color: #2c3e50;
}

h1 {
  font-family: $mainFont;
  font-size: 7rem;
  text-align: center;
  width: 100%;
  margin-top: 15rem;
}

main {
  padding: 3rem 1rem;
  font-family: $mainFont;
}

.information-container {
  @include flexLayout;
  flex-direction: column;
}

h4 {
  font-size: $font-bg;
}
</style>
