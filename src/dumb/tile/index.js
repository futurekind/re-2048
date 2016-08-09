import React, {PropTypes as pt} from 'react';

import './tile.scss';

const Tile = (props) => (
    <div className={`tile  tile--${props.shade}`}>{props.label}</div>
)

Tile.defaultProps = {
    shade: 'light',
    label: 2,
    top: 1,
    left: 1
};

Tile.propTypes = {
    shade: pt.oneOf([
        'light',
        'medium',
        'dark',
        'ultradark'
    ]),
    label: pt.number,
    top: pt.oneOf([1, 2, 3, 4]),
    left: pt.oneOf([1, 2, 3, 4]),
};

export default Tile
