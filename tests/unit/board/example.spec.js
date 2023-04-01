import Vuex from 'vuex'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import JpaBoardList from '@/components/lecture/board/JpaBoardList'
import JpaBoardRead from '@/components/lecture/board/JpaBoardRead'
import JpaBoardRegisterPage from '@/views/lecture/board/JpaBoardRegisterPage'

import { __createMocks as createBoardStoreMocks } from '@/store/board/__mocks__'
import Vuetify from 'vuetify'
import axiosInst from "@/utility/axiosObject";
import axios from "axios";
import router from "@/router";
import store from "@/store";
import App from "@/App";

jest.mock('@/store/board/BoardModule')

//const localVue = createLocalVue()
//localVue.use(Vuex)

//const vuetify = new Vuetify()
//localVue.use(Vuetify)

const vuetify = new Vuetify()

describe('JpaBoardList', () => {
  it('renders props.msg when passed', () => {
    let board = new Array()
    board.id = 1
    board.title = "go"
    board.writer = "go"
    board.regDate = new Date()

    const wrapper = shallowMount(JpaBoardList, {
      propsData: { boards: board }
    })
    expect(wrapper.props().boards).toBe(board)
  })
})

describe('JpaBoardRead', () => {
  it('renders props.msg when passed', () => {
    let board = new Object()
    board.id = 1
    board.title = "go"
    board.writer = "go"
    board.regDate = new Date()

    const wrapper = shallowMount(JpaBoardRead, {
      propsData: { board: board }
    })
    expect(wrapper.props().board).toBe(board)
  })
})

//let storeMocks = createBoardStoreMocks()
//wrapper = shallowMount(JpaBoardRegisterPage, {
// let wrapper = shallowMount(JpaBoardRegisterPage, {
//   vuetify,
//   store: storeMocks.store,
// })

describe('requestCreateBoardToSpring', () => {
  test('register actions test', async () => {
    const storeMocks = createBoardStoreMocks()
    // const wrapper = shallowMount(JpaBoardRegisterPage, {
    //   vuetify,
    //   store: storeMocks.store,
    // })

    const title = "go"
    const content = "go"
    const writer = "go"

    let board = new Object()
    board.id = 1
    board.title = "go"
    board.writer = "go"
    board.regDate = new Date('2023-04-01')

    await expect(storeMocks.actions.requestCreateBoardToSpring({}, { title, content, writer })).toStrictEqual(board)
  })
})
