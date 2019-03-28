<script>
import NavBar from '@components/NavBar'

export default {
  components: { NavBar },
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <div class="container flex flex-grow">
      <slot />
    </div>
  </div>
</template>
