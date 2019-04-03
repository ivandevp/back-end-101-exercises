<script>
export default {
  name: 'DarkInputIcon',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    inputType: {
      type: String,
      default: 'text',
    },
    icon: {
      type: String,
      default: 'lock',
    },
    valid: {
      type: Boolean,
      default: true,
    },
    inputId: {
      type: String,
      required: true,
    },
  },
  methods: {
    onInput(evt) {
      this.$emit('input', evt.target.value)
    },
  },
}
</script>
<template>
  <div class="flex flex-row w-full h-12 bg-white-30 rounded-lg GxInputDark">
    <!-- Icon container -->
    <div class="h-full flex justify-center  items-center w-12 justify-center">
      <p class="h-6 w-6">
        <i
          class="material-icons"
          :class="{ 'text-white': valid, 'text-warning': !valid }"
          >{{ icon }}</i
        >
      </p>
    </div>
    <!-- Label and input container -->
    <div
      class="flex flex-col h-full w-full bg-transparent items-start  justify-center gx-input-label relative"
    >
      <!-- Label container -->
      <input
        :id="inputId"
        ref="gxInput"
        :type="inputType"
        :aria-label="label"
        :value="value"
        :class="{ 'active-input': value.length >= 1 }"
        class="absolute text-white bg-transparent h-50  w-full text-base pl-0 gx-input-inline-label"
        @input="onInput"
      />
      <label
        :for="inputId"
        :class="{
          'text-secondary-600': valid && value.length >= 1,
          'text-white': value.length == 0 && valid,
          'text-warning': !valid,
          'active-label': value.length >= 1,
        }"
        class="text-sm font-ghotic h-50 text-sm absolute align-text-bottom"
        @click="$refs['gxInput'].focus()"
        >{{ label }}</label
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
/* stylelint-disable */
.gx-input-inline-label + label {
  top: 30%;
}
.gx-input-inline-label:focus + label {
  top: 2.5px;
  // color:#4a1ed9;
}
.gx-input-inline-label:focus {
  bottom: 2.5px;
  height: 50%;
}
.active-input {
  bottom: 5px;
  height: 50%;
}
.gx-input-inline-label + label.active-label {
  top: 2.5px;
}
.GxInputDark {
  label,
  i {
    transition: all 0.2s ease 0s;
  }
}
.bg-white-30 {
  background-color: rgba(255, 255, 255, 0.3);
}
</style>
