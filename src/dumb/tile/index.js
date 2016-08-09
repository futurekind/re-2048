import React, {PropTypes as pt} from 'react';

import './tile.scss';

const MAGIG_OFFSET = 8;

const calcTranslation = (top, left) => (
    {
        transform: `translate(
            calc(${100 * left}% + ${left * MAGIG_OFFSET}px),
            calc(${100 * top}% + ${top * MAGIG_OFFSET}px)
        )`
    }
)

const getShade = (value) => {
    if(value < 64) return 'light';
    if(value < 512) return 'medium';
    if(value < 2048) return 'dark';
    if(value >= 2048) return 'ultradark';
}

const Tile = (props) => (
    <div
        className={`tile  tile--${getShade(props.value)}`}
        style={calcTranslation(props.top, props.left)}
    >
        {props.value}
    </div>
)

Tile.defaultProps = {
    value: 2,
    top: 0,
    left: 0
};

Tile.propTypes = {
    value: pt.number,
    top: pt.oneOf([0, 1, 2, 3]),
    left: pt.oneOf([0, 1, 2, 3]),
};

export default Tile
