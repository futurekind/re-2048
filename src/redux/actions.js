import uuid from 'uuid';
import {getFieldIndex} from './reducer.root';

export const addTile = availableFields => {
    const randomFieldIndex = Math.floor(Math.random() * (availableFields.length - 1 - 0 + 1)) + 0;
    const fieldIndex = getFieldIndex(availableFields[randomFieldIndex]);
    
    return {
        type: 'ADD_TILE',
        payload: {
            uuid: uuid.v1(),
            value: 2,
            fieldMapIndex: fieldIndex
        }
    }
}
