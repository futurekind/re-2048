const fieldsMap = [
    [0, 0], [0, 1], [0, 2], [0, 3],
    [1, 0], [1, 1], [1, 2], [1, 3],
    [2, 0], [2, 1], [2, 2], [2, 3],
    [3, 0], [3, 1], [3, 2], [3, 3]
]

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_TILE':
            return [
                ...state,
                action.payload
            ];
            break;

        case 'UPDATE_TILES': {
            return action.tiles;
            break;
        }

        default:
            return state;
    }
}

export const getEmptyFields = (state) => {
    const fieldMapIndexes = state.map(tile => tile.fieldMapIndex)

    return fieldsMap.reduce((emptyFieldMap, field, index) => {
        if(fieldMapIndexes.indexOf(index) === -1)
            return [
                ...emptyFieldMap,
                field
            ]
        return emptyFieldMap
    }, []);
}

export const getFieldIndex = (coords) => {
    return fieldsMap.findIndex(item => item[0] === coords[0] && item[1] === coords[1])
}

export const getField = (index) => fieldsMap[index];

export const getAllFields = () => fieldsMap
