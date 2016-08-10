import uuid from 'uuid';
import {getFieldIndex, getField} from './reducer.root';

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

export const translateTiles = (tiles) => {
    // const translatedTiles = tiles.map(tile => {
    //     const field = getField(tile.fieldMapIndex)
    //     const newFieldIndex = getFieldIndex([field[0], 3])
    //
    //     return Object.assign({}, tile, {
    //         fieldMapIndex: newFieldIndex
    //     })
    // })
    const fieldIndexes = tiles.map(tile => tile.fieldMapIndex);
    const translatedTiles = tiles.reduce((translated, tile) => {

        const field = getField(tile.fieldMapIndex)
        let coords = [field[0], 3];
        let newFieldIndex = getFieldIndex(coords)
        let value = tile.value;

        if(fieldIndexes.indexOf(newFieldIndex) > -1) {
            newFieldIndex = getFieldIndex([coords[0], coords[1] - 1]),
            value = tile.value * 2
        }

        return [
            ...translated,
            Object.assign({}, tile, {
                fieldMapIndex: newFieldIndex,
                value
            })
        ]

    }, [])

    return {
        type: 'UPDATE_TILES',
        tiles: translatedTiles
    }
}
