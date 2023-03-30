import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import GlobalComponent from '@/components/lecture/componentTest/GlobalComponent'

Vue.component(GlobalComponent.name, GlobalComponent)

describe('GlobalComponent.vue', () => {
  it('renders props.msg when passed', () => {
    let counter = 0
    const wrapper = shallowMount(GlobalComponent, {
      propsData: { initialTest: counter }
    })
    expect(wrapper.props().initialTest).toBe(counter)
  })
})
