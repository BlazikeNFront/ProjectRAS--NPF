<template>
  <div v-if="loginForm" class="backDrop" @click="toggleLoginForm"></div>
  <transition name="fade">
    <login-form v-if="loginForm" @closeLoginForm="toggleLoginForm"></login-form>
  </transition>
  <button class="loginFormSwitch" @click="toggleLoginForm" v-if="!token">
    Login
  </button>
  <button class="loginFormSwitch" @click="logout" v-else>Logout</button>
</template>
<script>
import LoginForm from "./loginForm.vue";
export default {
  components: {
    LoginForm,
  },
  data() {
    return {
      loginForm: false,
    };
  },
  computed: {
    token() {
      return this.$store.getters["getToken"];
    },
  },
  methods: {
    toggleLoginForm() {
      this.loginForm = !this.loginForm;
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>
<style lang="scss">
.backDrop {
  position: fixed;
  z-index: 150;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
}
.loginFormSwitch {
  margin-left: 20%;
  position: absolute;
  top: 3rem;
  border: none;
  border-radius: 25px;
  @include mainFontBold;
  color: white;
  padding: 1rem 3rem;
  background-color: #2c3e50;
  font-family: $mainFont;
  z-index: 100;
  @media (max-width: 425px) {
    top: 4rem;
    padding: 1rem 2rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

  @media (max-width: 1100px) {
    transform: translateX(25rem);
  }
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;

  @media (max-width: 1100px) {
    transform: translateX(0);
  }
}
</style>