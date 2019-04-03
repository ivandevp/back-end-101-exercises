import Vue from 'vue'
import App from './app'
import router from '@router'
import store from '@state/store'
// import '@components/_globals'

// Material Design Icons
import 'material-design-icons/iconfont/material-icons.css'
import Buefy from 'buefy'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (window.Cypress) {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

// Directives
Vue.directive('click-outside', {
  bind() {
    this.event = (event) => this.vm.$emit(this.expression, event)
    this.el.addEventListener('click', this.stopProp)
    document.body.addEventListener('click', this.event)
  },
  unbind() {
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click', this.event)
  },

  stopProp(event) {
    event.stopPropagation()
  },
})

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// If running inside Cypress...
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}
