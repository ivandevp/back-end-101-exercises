import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import GxDropdown from '../../components/core/GxDropdown.vue'
// import 'vue-multiselect/dist/vue-multiselect.min.css'
import Buefy from 'buefy'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})

storiesOf('core/GxDropdown', module).add('as a component', () => ({
  components: { GxDropdown },
  template: '<GxDropdown :options="[1,2,3]" />',
}))
