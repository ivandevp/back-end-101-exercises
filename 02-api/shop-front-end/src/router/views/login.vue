<script>
import { authMethods } from '@state/helpers'
import appConfig from '@src/app.config'
import GxInputDark from '@components/core/GxInputDark.vue'
// import GxWhiteInput from '@components/core/GxWhiteInput.vue'
export default {
  page: {
    title: 'Login',
    meta: [{ name: 'description', content: `Log in to ${appConfig.title}` }],
  },
  components: {
    GxInputDark,
  },
  data() {
    return {
      email: '',
      password: '',
      authError: false,
      tryingToLogIn: false,
      showPassword: false,
      phone: '',
      white: '',
    }
  },
  computed: {
    validEmail() {
      if (this.email.length > 1) {
        return this.validateEmail(this.email)
      }
      return true
    },
    validPassword() {
      if (this.password.length > 1) {
        return this.password.length > 1
      }
      return false
    },
    validForm() {
      return this.validPassword && this.validEmail
    },
  },
  methods: {
    ...authMethods,
    async tryToLogIn() {
      try {
        this.tryingToLogIn = true
        await this.logIn({
          username: this.email,
          password: this.password,
        })
        // Redirect to the originally requested page, or to the home page
        this.tryingToLogIn = false
        this.$router.push(this.$route.query.redirectFrom || { name: 'home' })
      } catch (error) {
        this.tryingToLogIn = false
        this.authError = true
      }
    },
    validateEmail(input) {
      const regex = /^\w+(?:\+?[.-]?\w+)*(?:\+)*@\w+(?:[.-]?\w+)*(?:\.\w{2,3})+$/
      return regex.test(input)
    },
  },
}
</script>
<template>
  <div class="login-cotainer">
    <div class="main">
      <header>
        <a>
          <i class="material-icons">arrow_back</i>
        </a>
      </header>
      <main class="form-container">
        <form>
          <legend>
            <p>Que gusto verte de nuevo</p>
          </legend>
          <fieldset>
            <ul>
              <li>
                <GxInputDark
                  v-model="email"
                  input-id="email-input"
                  icon="email"
                  :valid="validEmail"
                  label="Correo"
                />
              </li>
              <li>
                <GxInputDark
                  v-model="password"
                  input-id="password-input"
                  icon="lock"
                  label="Contraseña"
                />
              </li>
              <li>
                <button type="button" @click="tryToLogIn"> Iniciar</button>
              </li>
            </ul>
          </fieldset>
        </form>
      </main>
    </div>
  </div>
</template>
<style lang="scss">
/* stylelint-disable */
@-webkit-keyframes autofill {
  to {
    color: #fff;
    background: rgba(255, 255, 255, 0.3);
  }
}

input:-webkit-autofill {
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
}
.login-cotainer {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-image: radial-gradient(circle, #bea0ff 30%, #a176ff);
  ul {
    width: 320px;
  }
  li {
    margin-top: 10px;
  }
}

@media screen and (min-width: 425px) {
  .login-cotainer .main main.form-container form fieldset ul li i.visibility {
    right: 25px;
  }
}
</style>
