import { configure } from '@storybook/vue'
import { addDecorator } from '@storybook/vue'
import { withInfo } from 'storybook-addon-vue-info'

addDecorator(withInfo)

const req = require.context('../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
// function loadStories() {
// require('../src/stories/index.js')
// You can require as many stories as you need.
// }

configure(loadStories, module)
