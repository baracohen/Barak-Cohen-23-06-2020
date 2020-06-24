import { ADD_TO_FAVORITS } from "../actions/types";
import { REMOVE_FROM_FAVORITS } from "../actions/types";

const initialState = {
    selectedValue: '',
    favorits: [],
    currDay: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITS:

            let addQuantity = action.obj;
            addQuantity.isFavorites = true;

            return {
                ...state,
                selectedValue: action.obj,
                favorits: [...state.favorits,
                state.favorits[state.favorits.length + 1] = addQuantity]
            }

        case REMOVE_FROM_FAVORITS:
                action.obj.isFavorites = false
            state.favorits.forEach((element, index) => {
                if (element.key === action.obj.key) {
                    state.favorits.splice(index, 1);
                    return false
                }
            });

            return {
                ...state,
                favorits: [...state.favorits]
            }
        default:
            return state;
    }
}