<script>
export default {
  data() {
    return {}
  },
}
</script>

<template>
  <div
    class="bottom-nav flex justify-between w-full h-12 md:hidden"
    style="box-shadow: 0 -1px 5px 1px;"
  >
    <button
      v-for="i in [1, 2]"
      :key="i"
      class="flex-grow flex justify-center items-center"
    >
      <i class="material-icons">cloud_upload</i>
    </button>
    <div class="flex-grow flex justify-center items-center">
      <div
        class="rounded-full flex justify-center items-center w-full relative"
        style="margin-bottom: 25%; height: 20vw;"
      >
        <button
          class="rounded-full flex justify-center items-center bg-primary shadow-md	"
          style="width: 75%; height: 75%;"
        >
          <i class="material-icons" style="color: white">cloud_upload</i>
        </button>
      </div>
    </div>
    <button
      v-for="i in [4, 5]"
      :key="i"
      class="flex-grow flex justify-center items-center"
    >
      <i class="material-icons">cloud_upload</i>
    </button>
  </div>
</template>

<style lang="scss">
/* stylelint-disable */
.bottom-nav {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: white;
}
</style>
