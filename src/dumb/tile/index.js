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

const Tile = (props) => (
    <div
        className={`tile  tile--${props.shade}`}
        style={calcTranslation(props.top, props.left)}
    >
        {props.label}
    </div>
)

Tile.defaultProps = {
    shade: 'light',
    label: 2,
    top: 0,
    left: 0
};

Tile.propTypes = {
    shade: pt.oneOf([
        'light',
        'medium',
        'dark',
        'ultradark'
    ]),
    label: pt.number,
    top: pt.oneOf([0, 1, 2, 3]),
    left: pt.oneOf([0, 1, 2, 3]),
};

export default Tile
