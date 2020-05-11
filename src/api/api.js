import * as axios from 'axios'

let baseURL = ''
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:5000/api/v1/'
} else {
    // baseURL = 'http://37.228.117.161:5000/api/v1/'
    // baseURL = 'http://192.168.0.100:5000/api/v1/'
    baseURL = 'http://localhost:5000/api/v1/'
}

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
})

export const SongAPI = {

    getSongsList(getOnlyFavor) {
        return instance.get('/cards?limit=999' + (getOnlyFavor ? '&favor=true' : ''))
        // return instance.get('/cards', {favor: false, name: ''})
    },
    getSong(songId) {
        return instance.get('/cards?id=' + songId)
    },
    getSongRandom() {
        return instance.get('/cards?random=true&limit=1')
    },
    setFavor(songId, favor) {
        const result = instance.post('/cards', {_id: songId, favor: favor})
        return result
    },
    setContent(songId, content) {
        return instance.post('/cards', {_id: songId, content: content})
    }
}

