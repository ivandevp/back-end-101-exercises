<script>
import NavBar from '@components/NavBar'
import GxBottomNav from '@components/core/GxBottomNav'
export default {
  components: { NavBar, GxBottomNav },
}
</script>

<template>
  <div class="flex flex-col justify-between">
    <NavBar />
    <div class="container flex flex-grow pb-16">
      <slot />
      <GxBottomNav />
    </div>
  </div>
</template>
