<script>
export default {
  name: 'GxChip',
  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
    icon: {
      type: String,
    },
  },
}
</script>

<template>
  <button
    class="
    flex justify-center items-center
    px-4
    py-2
    rounded-full
    shadow-lg bg-primary-50 text-primary-500
    active:bg-primary"
    :class="{
      'hover:bg-gray-400 hover:text-black': !disabled,
      'cursor-not-allowed': disabled,
      'bg-gray-300': disabled,
      'text-gray': disabled,
    }"
    :disabled="disabled"
  >
    <i v-if="icon" class="material-icons mr-3">{{ icon }}</i>
    <span><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
.gxFab {
  width: 4rem;
  height: 4rem;
}
</style>
