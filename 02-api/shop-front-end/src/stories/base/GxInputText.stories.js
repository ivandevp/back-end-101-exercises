/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable max-len */

import { storiesOf } from '@storybook/vue'
// import { action } from '@storybook/addon-actions'
import GxInputText from '../../components/core/GxInputText.vue'
import GxInputTextDark from '../../components/core/GxInputTextDark.vue'
import '../../design/index.scss'
storiesOf('core/GxInputText', module)
  .add(
    'empty',
    () => ({
      data() {
        return {
          somevalue: '',
        }
      },
      components: { GxInputText },
      template: '<GxInputText label="some" :value="somevalue" id="someid" />',
    }),
    {
      info: {
        summary:
          'GxInputText se utiliza sobre fondos claros. Puede llevar uno o dos íconos.',
      },
    }
  )
  .add(
    'with text',
    () => ({
      data() {
        return {
          somevalue: 'some text',
        }
      },
      components: { GxInputText },
      template: '<GxInputText label="some" :value="somevalue" id="someid" />',
    }),
    {
      info: {
        summary:
          'GxInputText se utiliza sobre fondos claros. Puede llevar uno o dos íconos.',
      },
    }
  )
  .add('dark', () => ({
    components: { GxInputTextDark },
    template: '<GxInputTextDark label="some" value="somevalue" id="someid" />',
  }))
