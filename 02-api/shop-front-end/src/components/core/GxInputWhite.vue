<script>
export default {
  name: 'GxWhiteInput',
  props: {
    leftIcon: {
      type: String,
      default: 'lock',
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    valid: {
      type: Boolean,
      default: false,
    },
    assistiveText: {
      type: String,
      default: '',
    },
    inputId: {
      required: true,
      type: String,
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
  <div class="w-full flex flex-col justify-end gx-white-input">
    <input
      :id="inputId"
      :value="value"
      class="w-full"
      type="text"
      @input="onInput"
    />
    <div class="label-container">
      <label
        :for="inputId"
        :class="{
          'active-label': value.length >= 1,
          'text-warning': !valid,
          'text-secondary-500': valid,
          'text-gray-primary': value.length === 0,
        }"
        >{{ label }}</label
      >
    </div>
    <p
      v-if="assistiveText"
      :class="{ 'text-warning': !valid, 'text-secondary-500': valid }"
      >{{ assistiveText }}</p
    >
    <i
      class="material-icons"
      :class="{
        'text-warning': !valid,
        'text-secondary-500': valid,
        'text-black': value.length === 0,
      }"
      >lock</i
    >
  </div>
</template>
<style lang="scss" scoped>
/* stylelint-disable */
.gx-white-input {
  display: grid;
  grid-template-rows: 16px 1fr 16px;
  grid-template-columns: 25px auto 1fr 25px;
  height: 84px;
  div.label-container {
    position: relative;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 5;
    align-self: center;
    justify-self: center;
    width: 100%;
    height: 100%;
    padding-left: 30px;
    transition: all 2s ease 0s;
    label {
      position: absolute;
      bottom: 10px;
      left: 25px;
      width: 100%;
      font-size: 20px;
      transition: all 0.2s ease-in 0s;
    }
  }
  input {
    z-index: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 5;
    align-self: center;
    justify-self: center;
    height: 44px;
    padding-left: 26px;
    color: black;
    background: transparent;
    border-bottom: 2px solid gray;
  }
  input:focus {
    border-color: #6d31ff;
    outline: none;
  }
  input:focus + div.label-container > label {
    font-size: 16px;
    transform: translate(-20px, -30px);
  }
  input + div.label-container > label.active-label {
    font-size: 16px;
    transform: translate(-20px, -30px);
  }
  i {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    align-self: center;
    justify-self: center;
  }
  p {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 5;
    align-self: center;
    justify-self: start;
    margin-left: 5px;
  }
}
</style>
