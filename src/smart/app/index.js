import React, {Component} from 'react';

import Board from '../../dumb/board';

import './app.scss';

class App extends Component {

    render() {
        return (
            <div className="app">
                <Board />
            </div>
        )
    }

}

export default App
