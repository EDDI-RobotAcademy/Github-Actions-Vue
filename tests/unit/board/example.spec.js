import Vuex from 'vuex'
import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import JpaBoardList from '@/components/lecture/board/JpaBoardList'
import JpaBoardRead from '@/components/lecture/board/JpaBoardRead'
import JpaBoardRegisterPage from '@/views/lecture/board/JpaBoardRegisterPage'

import { __createMocks as createBoardStoreMocks } from '@/store/board/__mocks__'
import Vuetify from 'vuetify'

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

let storeMocks = createBoardStoreMocks()
//wrapper = shallowMount(JpaBoardRegisterPage, {
let wrapper = mount(JpaBoardRegisterPage, {
  vuetify,
  store: storeMocks.store,
})

describe('requestCreateBoardToSpring', () => {
  // beforeEach(() => {
  //   storeMocks = createBoardStoreMocks()
  //   //wrapper = shallowMount(JpaBoardRegisterPage, {
  //   wrapper = mount(JpaBoardRegisterPage, {
  //     vuetify,
  //     store: storeMocks.store,
  //   })
  // })

  test('register actions test', async () => {
    const title = "go"
    const content = "go"
    const writer = "go"

    await expect(storeMocks.store.requestCreateBoardToSpring({}, { title, content, writer }))
        .rejects.toThrow("API 에러 발생!")
  })
})
