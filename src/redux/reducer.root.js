import {combineReducers} from 'redux';

import tiles, * as fromTiles from './reducer.tile';

export default combineReducers({
    tiles
})

export const getEmptyFields = (state) => fromTiles.getEmptyFields(state);
export const getFieldIndex = (coords) => fromTiles.getFieldIndex(coords);
export const getField = (index) => fromTiles.getField(index);
export const getAllFields = () => fromTiles.getAllFields();
