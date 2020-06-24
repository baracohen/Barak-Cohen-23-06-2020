
import { REMOVE_FROM_FAVORITS } from './types'
const removeFromFavorites = (obj) => {
    return {
        type: REMOVE_FROM_FAVORITS,
        obj: obj
    }
}

export default removeFromFavorites