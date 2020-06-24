
import { ADD_TO_FAVORITS } from './types'
const addToFavorites = (obj) => {
    return {
        type: ADD_TO_FAVORITS,
        obj: obj
    }
}

export default addToFavorites