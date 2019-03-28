<script>
export default {
  name: 'GxSwitch',
  props: {
    value: {
      type: Boolean,
    },
  },
  data() {
    return {
      innerValue: this.value,
    }
  },
  watch: {
    innerValue(newVal) {
      this.$emit('input', newVal)
    },
  },
}
</script>

<template>
  <label class="switch">
    <input v-model="innerValue" type="checkbox" />
    <span class="slider round"></span>
  </label>
</template>

<style lang="scss" scoped>
/* stylelint-disable */

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 12px;
}

/* Hide default HTML checkbox */
.switch input {
  width: 0;
  height: 0;
  opacity: 0;
}

/* The slider */
.slider {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider::before {
  position: absolute;
  bottom: -3px;
  left: -4px;
  width: 18px;
  height: 18px;
  content: '';
  background-color: #fff;
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider::before {
  background-color: #0b00c1;
}

input:checked + .slider {
  background-color: #d8c6fe;
}

input:focus + .slider {
  box-shadow: 0 0 1px #d8c6fe;
}

input:checked + .slider::before {
  -webkit-transform: translateX(18px);
  -ms-transform: translateX(18px);
  transform: translateX(18px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round::before {
  border-radius: 50%;
}
</style>
