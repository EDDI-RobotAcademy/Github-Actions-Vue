import { shallowMount } from '@vue/test-utils'
import LocalComponent from '@/components/lecture/componentTest/LocalComponent'

describe('LocalComponent.vue', () => {
  it('renders props.msg when passed', () => {
    let counter = 0

    const wrapper = shallowMount(LocalComponent, {
      propsData: { initialValue: counter }
    })
    expect(wrapper.props().initialValue).toBe(counter)
  })
})
