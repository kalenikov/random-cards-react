export const initialState = {
    currentSongId: null,
}


const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setSongId': {
            return {
                ...state,
                currentSongId: action.payload
            }
        }
        case 'test':
            return {}
    }
}

export default simpleReducer
