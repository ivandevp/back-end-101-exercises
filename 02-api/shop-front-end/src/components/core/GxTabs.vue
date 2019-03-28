<script>
export default {
  name: 'GxTabs',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: this.default,
    }
  },
}
</script>

<template>
  <div class="flex">
    <a
      v-for="tab in tabs"
      :key="tab.name"
      class="
        flex-grow flex flex-col justify-center items-center
        border-b-2 border-solid
      "
      :class="{
        'border-primary text-primary': tab.name === active,
      }"
      href=""
      @click.prevent="active = tab.name"
    >
      <i v-if="tab.icon" class="material-icons">{{ tab.icon }}</i>
      <span v-if="tab.name">{{ tab.name }}</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.gxFab {
  width: 4rem;
  height: 4rem;
}
</style>
