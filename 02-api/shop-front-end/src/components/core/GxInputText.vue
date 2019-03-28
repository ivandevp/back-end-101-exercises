<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      formFieldActive: false,
    }
  },
}
</script>

<template>
  <div
    class="form-field"
    :class="{
      'form-field--is-filled': value.length > 0,
      'form-field--is-active': formFieldActive,
    }"
  >
    <div class="form-field__control">
      <i class="material-icons" style="position: absolute; bottom: 16px;"
        >cloud_upload</i
      >
      <label :for="id" class="form-field__label">{{ label }}</label>
      <input
        :id="id"
        :value="value"
        type="text"
        class="form-field__input"
        :class="{
          'form-field--is-active': formFieldActive,
          'form-field--is-filled': value.length > 0,
        }"
        @focus="formFieldActive = true"
        @blur="formFieldActive = false"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable */
$primary-color: #b11adc;
$animation-duration: 0.4s;

@mixin label-active() {
  left: 0;
  padding-left: 0;
  font-size: 0.75rem;
  transform: translateY(-14px);
}

.form-field {
  display: block;
  margin-bottom: 16px;

  &--is-active {
    .form-field__control {
      &::after {
        border-bottom: 2px solid $primary-color;
        transform: scaleX(150);
      }
    }
    .form-field__label {
      color: #b11adc;

      @include label-active();
    }
  }
  &--is-filled {
    .form-field__label {
      @include label-active();
    }
  }
}
.form-field__label {
  position: absolute;
  top: 0;
  left: 26px;
  display: block;
  width: 100%;
  padding: 18px 12px 26px;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
  transition: all $animation-duration;
}
.form-field__control {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px 8px 0 0;

  &::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 1%;
    margin: 0 auto;
    content: '';
    border-bottom: 2px solid $primary-color;
    transition: all $animation-duration;
    transform: scaleX(0);
  }
}
.form-field__input,
.form-field__textarea {
  display: block;
  width: 100%;
  padding: 0 12px 10px 32px;
  margin-top: 24px;
  font-size: 1.2rem;
  color: #333;
  background: transparent;
  border: 0;
  border-bottom: 1px solid #999;
  outline: 0;
  appearance: none;
}
.form-field__textarea {
  height: 150px;
}
</style>
