<script>
import { authComputed } from '@state/helpers'
// import NavBarRoutes from './nav-bar-routes'

export default {
  // components: { NavBarRoutes },
  data() {
    return {
      leftMenuIsOpen: false,
      rightMenuIsOpen: false,
      persistentNavRoutes: [
        {
          name: 'home',
          title: 'Home',
        },
      ],
      loggedInNavRoutes: [
        {
          name: 'profile',
          title: () => 'Logged in as ' + this.currentUser.name,
        },
        {
          name: 'logout',
          title: 'Log out',
        },
      ],
      loggedOutNavRoutes: [
        {
          name: 'login',
          title: 'Log in',
        },
      ],
    }
  },
  computed: {
    ...authComputed,
  },
  methods: {
    toggleBurgerMenu() {
      this.navMenuIsOpen = !this.navMenuIsOpen
    },
    closeDrawerLeft: function(event) {
      if (this.leftMenuIsOpen) {
        this.leftMenuIsOpen = false
      }
    },
    closeDrawerRight: function(event) {
      if (this.rightMenuIsOpen) {
        this.rightMenuIsOpen = false
      }
    },
  },
  directives: {
    'click-outside': {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
          const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${
            binding.expression
          }' is not a function, but has to be`
          if (compName) {
            warn += `Found in component '${compName}'`
          }

          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
            binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
      },

      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null
      },
    },
  },
}
</script>

<template>
  <nav class="navbar is-primary flex justify-between" role="navigation">
    <!-- Left Menu -->
    <a
      v-click-outside="closeDrawerLeft"
      class=""
      @click="leftMenuIsOpen = !leftMenuIsOpen"
    >
      <span class="icon is-large has-text-white">
        <i class="fas fa-bars"></i>
      </span>
      <!-- Left Drawer -->
      <transition name="slide-left">
        <aside
          v-if="leftMenuIsOpen"
          id="drawerLeft"
          class="drawerLeft"
          :class="{ drawerLeftIsActive: leftMenuIsOpen }"
        >
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">CSS Script</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Portfolios</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </aside>
      </transition>
    </a>

    <!-- Right Menu -->
    <a
      v-click-outside="closeDrawerRight"
      class=""
      @click="rightMenuIsOpen = !rightMenuIsOpen"
    >
      <span class="icon is-large has-text-white">
        <i class="fas fa-ellipsis-v"></i>
      </span>
      <!-- Right Drawer -->
      <transition name="slide-right">
        <aside
          v-if="rightMenuIsOpen"
          id="drawerRight"
          class="drawerRight"
          :class="{ drawerRightIsActive: rightMenuIsOpen }"
        >
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">CSS Script</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Portfolios</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </aside>
      </transition>
    </a>
  </nav>
  <!-- <ul :class="$style.container">
    <NavBarRoutes :routes="persistentNavRoutes" />
    <NavBarRoutes v-if="loggedIn" :routes="loggedInNavRoutes" />
    <NavBarRoutes v-else :routes="loggedOutNavRoutes" />
  </ul> -->
</template>
<style scoped lang="scss">
.drawerLeft {
  position: fixed;
  top: 52px;
  bottom: 0;
  left: -80%;
  min-width: 200px;
  max-width: 80%;
  background: white;
  border: solid 1px red;
}
.drawerLeftIsActive {
  left: 0;
}
.drawerRight {
  position: fixed;
  top: 52px;
  right: -80%;
  bottom: 0;
  min-width: 200px;
  max-width: 80%;
  background: white;
  border: solid 1px red;
}
.drawerRightIsActive {
  right: 0;
}

// Slide animations
/* stylelint-disable */
.slide-right-leave-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-left-enter-active {
  transition: 0.3s;
}
.slide-right-enter {
  transform: translate(100%, 0);
}
.slide-right-leave-to {
  transform: translate(100%, 0);
}
.slide-left-enter {
  transform: translate(-100%, 0);
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}
</style>
