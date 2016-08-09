import React from 'react';

import './board.scss';

const Board = (props) => (
    <div className="board">{props.children}</div>
)

Board.defaultProps = {};

Board.propTypes = {};

export default Board
