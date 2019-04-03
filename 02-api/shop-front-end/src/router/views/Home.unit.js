import Home from './home'
import { mount, createLocalVue } from '@vue/test-utils'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import {
  getQueriesForElement,
  prettyDOM,
  wait,
  fireEvent,
} from 'dom-testing-library'

const fireEventAsync = {}

Object.entries(fireEvent).reduce((obj, [key, val]) => {
  obj[key] = async (...args) => {
    const ret = val(...args)
    await wait()
    return ret
  }
  return obj
}, fireEventAsync)

const router = new VueRouter()
const localVue = createLocalVue()
localVue.use(Buefy)
localVue.use(VueRouter)

function render(TestComponent, options) {
  const wrapper = mount(TestComponent, {
    localVue,
    attachToDocument: true,
    ...options,
  })

  return {
    wrapper,
    debug: () => console.log(prettyDOM(wrapper.element)), // eslint-disable-line no-console
    ...getQueriesForElement(wrapper.element),
  }
}

describe('@views/home', () => {
  // it('is a valid view', () => {
  //   expect(Home).toBeAViewComponent()
  // })

  // it('renders an element', () => {
  //   const { element } = shallowMountView(Home)
  //   expect(element.textContent).toContain('Home Page')
  // })

  xit('can click a Switch', async () => {
    const { wrapper, getByTestId } = render(Home, {
      localVue,
      router,
    })

    expect(wrapper.vm.switchActive).toBe(false)
    await fireEventAsync.click(getByTestId('someSwitch'))
    expect(wrapper.vm.switchActive).toBe(true)
  })
})
