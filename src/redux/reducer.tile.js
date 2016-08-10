const fieldsMap = [
    [0, 0], [0, 1], [0, 2], [0, 3],
    [1, 0], [1, 1], [1, 2], [1, 3],
    [2, 0], [2, 1], [2, 2], [2, 3],
    [3, 0], [3, 1], [3, 2], [3, 3]
]

export default (state = [
    {uuid: '123', value: 2, fieldMapIndex: 0},
    {uuid: '456', value: 4, fieldMapIndex: 15},
], action) => {
    switch (action.type) {
        case 'ADD_TILE':
            return state;
            break;

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

export const getAllFields = () => fieldsMap
