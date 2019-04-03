<script>
export default {
  mounted() {
    const setActive = (el, active) => {
      const formField = el.parentNode.parentNode
      if (active) {
        formField.classList.add('form-field--is-active')
      } else {
        formField.classList.remove('form-field--is-active')
        el.value === ''
          ? formField.classList.remove('form-field--is-filled')
          : formField.classList.add('form-field--is-filled')
      }
    }

    ;[].forEach.call(
      document.querySelectorAll('.form-field__input, .form-field__textarea'),
      (el) => {
        el.onblur = () => {
          setActive(el, false)
        }
        el.onfocus = () => {
          setActive(el, true)
        }
      }
    )
  },
}
</script>

<template>
  <div class="form-field">
    <div class="form-field__control">
      <label for="exampleTextarea" class="form-field__label"
        >Example textarea</label
      >
      <textarea id="exampleTextarea" class="form-field__textarea"></textarea>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable */
$primary-color: #b11adc;
$animation-duration: 0.4s;

@mixin label-active() {
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
  left: 0;
  display: block;
  width: 100%;
  padding: 18px 12px 0;
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
  transition: all $animation-duration;
}
.form-field__control {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #eee;
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
  padding: 0 12px 10px 12px;
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
