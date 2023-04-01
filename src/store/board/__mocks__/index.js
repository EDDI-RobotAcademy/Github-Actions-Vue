import Vue from "vue"
import Vuex from "vuex"
import axiosInst from "@/utility/axiosObject";

Vue.use(Vuex)

export const getters = {
    getBoards: jest.fn().mockReturnValue([
        {
            boardId: 1,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
        {
            boardId: 2,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
        {
            boardId: 3,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
    ]),

    getBoard: jest.fn().mockReturnValue([
        {
            boardId: 1,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
    ]),
}

export const mutations = {
    fetch: jest.fn(),
}

export const actions = {
    requestCreateBoardToSpring: jest.fn((payload) => {
        const { title, content, writer } = payload

        let board = new Object()
        board.id = 1
        board.title = "go"
        board.writer = "go"
        board.regDate = new Date('2023-04-01')

        return board
    }),
}

export const state = {
    boards: [
        {
            boardId: 1,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
        {
            boardId: 2,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
        {
            boardId: 3,
            title: 'go',
            content: 'go',
            writer: 'go',
            regDate: new Date(),
        },
    ],

    board: {
        boardId: 1,
        title: 'go',
        content: 'go',
        writer: 'go',
        regDate: new Date(),
    },
}

export function __createMocks(custom = { getters: {}, mutations: {}, actions: {}, state: {}}) {
    const mockGetters = Object.assign({}, getters, custom.getters)
    const mockMutations = Object.assign({}, mutations, custom.mutations)
    const mockActions = Object.assign({}, actions, custom.actions)
    const mockState = Object.assign({}, state, custom.state)

    return {
        getters: mockGetters,
        mutations: mockMutations,
        actions: mockActions,
        state: mockState,
        store: new Vuex.Store({
            getters: mockGetters,
            mutations: mockMutations,
            actions: mockActions,
            state: mockState,
        }),
    }
}

export const store = __createMocks().store;