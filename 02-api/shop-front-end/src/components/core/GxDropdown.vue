<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
  components: { Multiselect },
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      value: null,
    }
  },
}
</script>

<template>
  <Multiselect
    v-model="value"
    :options="options"
    :show-labels="false"
    placeholder="Elige una opción"
  >
    <template slot="option" slot-scope="props" :option-height="50">
      <div class="flex justify-between">
        <span>
          {{ props.option }}
        </span>
        <i class="material-icons">cloud_upload</i>
      </div>
    </template>
  </Multiselect>
</template>

<style lang="scss">
/* stylelint-disable */
.multiselect__option.multiselect__option--highlight {
  background: #0b00c1;
}
</style>
