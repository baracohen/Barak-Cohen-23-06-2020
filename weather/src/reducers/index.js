import favoritesReducer from './favoritesReducer';
import {combineReducers} from 'redux';

 const allReducers = combineReducers({
    favoritesState: favoritesReducer
})

export default allReducers