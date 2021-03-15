<template>
  <div class="test">
    <form
      @submit.prevent="handleLoginRequest"
      class="loginForm"
      @click="clearErrors"
    >
      <div class="loginForm__formControl">
        <label for="login" class="loginForm__label">Login</label>

        <input
          @click="clearErrors"
          type="text"
          id="login"
          autocomplete="username"
          required
          class="loginForm__input"
          :class="{
            loginForm__redBorder:
              !this.login.validated || !this.password.validated,
          }"
          v-model.trim="login.input"
        />
        <p class="loginForm__errorMsg" v-if="!login.validated">
          {{ login.errorMsg }}
        </p>
      </div>

      <div class="loginForm__formControl">
        <label for="password" class="loginForm__label">Password</label>
        <input
          @click="clearErrors"
          type="password"
          id="password"
          v-model.trim="password.input"
          class="loginForm__input loginForm__passwordInput"
          autocomplete="current-password"
          required
        />
        <p class="loginForm__errorMsg" v-if="!password.validated">
          {{ password.errorMsg }}
        </p>
      </div>
      <p class="loginForm_errorAuthMsg" v-if="authErrorMsg">
        Incorrect data or password !
      </p>
      <button class="loginForm__submitButton" v-if="!loader">Login</button>
      <loader class="loginForm__loader" v-else></loader>
    </form>
  </div>
</template>
<script>
import Loader from "./loader.vue";

export default {
  components: {
    Loader,
  },
  emits: ["loginRequest", "closeLoginForm"],

  data() {
    return {
      login: {
        input: null,
        validated: true,
        errorMsg: "Please insert correct username",
      },
      password: {
        input: null,
        validated: true,
        errorMsg: "Please insert password",
      },
      loader: false,
      authErrorMsg: false,
    };
  },
  methods: {
    clearErrors() {
      this.login.validated = true;
      this.password.validated = true;
      this.authErrorMsg = false;
    },
    validateForm() {
      if (this.login.input === null || "") {
        this.login.validated = false;

        return false;
      }
      if (this.password.input === null || "") {
        this.password.validated = false;
        return false;
      }
      return true;
    },

    closeLoginForm() {
      this.$emit("closeLoginForm");
    },
    async handleLoginRequest() {
      try {
        if (!this.validateForm()) {
          return;
        }
        this.loader = true;

        await this.$store.dispatch("setToken", {
          userName: this.login.input,
          password: this.password.input,
        });

        this.closeLoginForm();
        this.loader = false;
      } catch (err) {
        this.authErrorMsg = true;
        this.loader = false;
        console.log(err);
      }
    },
  },
};
</script>
<style lang="scss">
.test {
  position: absolute;
  width: 100%;
  max-width: 120rem;
  z-index: 200;
  font-family: $mainFont;
}

.loginForm {
  position: fixed;
  top: 0;
  right: 1rem;
  @include flexLayout;
  @include mainBorder;

  background-color: $primary-color;
  margin: 1rem auto;
  padding: 2rem;
  flex-direction: column;
  width: 20rem;
  border-radius: 10px;
  z-index: 200;
  animation-name: fadeIn;
  animation-duration: 1s;
  @media (min-width: 1100px) {
    margin-right: 15%;
  }
}
.loginForm__formControl {
  margin: 0.5rem 1rem 1rem 1rem;
}
.loginForm__label {
  @include mainFontBold;
  font-size: $font-md;
}
.loginForm__input {
  @include mainFontBold;
  margin: 1rem;
  font-family: inherit;
  width: 14rem;
  padding: 0.5rem;
  text-align: center;
}
.loginForm__redBorder {
  border: 2px solid red;
}
.loginForm__errorMsg {
  color: white;
}
.loginForm__passwordInput {
  font-family: sans-serif;
}
.loginForm__submitBox {
  @include flexLayout;
}
.loginForm__submitButton {
  @include mainBorder;
  margin: 1rem;
  font-family: inherit;
  font-size: $font-bg;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 2px 2px 8px black;
  background: white;
}
.loginForm_errorAuthMsg {
  @include mainFontBold;
  font-size: $font-sm;
}
.loginForm__loader {
  transform: scale(0.5) translateX(-50%);
}
</style>