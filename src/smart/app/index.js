import React, {Component} from 'react';

import Board from '../../dumb/board';
import Tile from '../../dumb/tile';

import './app.scss';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Board>
                    <Tile shade="ultradark" />
                </Board>
            </div>
        )
    }

}

export default App
