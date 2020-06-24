import {setSongId, initialState} from '../redux/song-reducer'
import simpleReducer from '../redux/song-simple-reducer'
import store from '../redux/store'

describe('test ac', () => {
    it('test setSongId ac ', () => {
        const new_id = '100'
        const expectedAction = {
            type: 'songs/setSongId',
            payload: {...initialState}
        }
        const AC = setSongId(initialState, {payload: new_id})
        expect(AC).toEqual(expectedAction)
    })
})

describe('test reducer', () => {
    it('test setSongId reducer ', () => {
        const new_id = '100'
        const expectedAction = {
            type: 'songs/setSongId',
            payload: new_id
        }
        expect(store.reducer(initialState, setSongId(initialState, {payload: new_id}))).toEqual(expectedAction)
    })
})

describe('song-simple-reducer', () => {
    it('setSongId ', () => {
        const new_id = '100'
        const expectedAction = {
            type: 'setSongId',
            payload: new_id
        }
        expect(simpleReducer({}, expectedAction)).toEqual({currentSongId: new_id})
    })
})

