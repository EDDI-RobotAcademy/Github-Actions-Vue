import Vuetify from 'vuetify'
import { mount } from '@vue/test-utils'

import JpaBoardRegisterPage from '@/views/lecture/board/JpaBoardRegisterPage'

const vuetify = new Vuetify()
const wrapper = mount(JpaBoardRegisterPage, {
  vuetify
})

describe('JpaBoardRegisterPage.vue:', () => {
  it('1. Mounts properly', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })
})