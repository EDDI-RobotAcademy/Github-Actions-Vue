import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import { shallowMount } from '@vue/test-utils'

import JpaBoardRegisterPage from '@/views/lecture/board/JpaBoardRegisterPage'
import router from "@/router";

const vuetify = new Vuetify()
const wrapper = shallowMount(JpaBoardRegisterPage, {
  router,
  vuetify
})

describe('JpaBoardRegisterPage.vue:', () => {
  it('1. Mounts properly', () => {
    expect(wrapper.vm).toBeTruthy();
  })
})