import React, {Component} from 'react';

import Board from '../../dumb/board';
import Tile from '../../dumb/tile';

import './app.scss';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Board>
                    <Tile shade="light" top={0} left={0} />
                </Board>
            </div>
        )
    }

}

export default App
