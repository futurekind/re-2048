import {combineReducers} from 'redux';

import tiles, * as fromTiles from './reducer.tile';

export default combineReducers({
    tiles
})

export const getEmptyFields = (state) => fromTiles.getEmptyFields(state);
export const getAllFields = () => fromTiles.getAllFields();
