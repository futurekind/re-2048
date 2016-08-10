import React, {Component} from 'react';
import {connect} from 'react-redux';

import Board from '../../dumb/board';
import Tile from '../../dumb/tile';

import {addTile, translateTiles} from '../../redux/actions';
import {getEmptyFields, getAllFields} from '../../redux/reducer.root';

import './app.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.handleAddTile = this.handleAddTile.bind(this);
        this.handleMoveTiles = this.handleMoveTiles.bind(this);
    }

    componentDidMount() {
        this.handleAddTile();

        setTimeout(() => this.handleAddTile(), 20)
    }

    render() {
        const {tiles} = this.props;
        const fields = getAllFields();

        return (
            <div className="app">
                <Board>
                    {tiles.map(tile => {
                        const field = fields[tile.fieldMapIndex];
                        return <Tile key={tile.uuid} value={tile.value} top={field[0]} left={field[1]} />
                    })}
                </Board>
                <button onClick={this.handleMoveTiles}>Move</button>
            </div>
        )
    }

    handleMoveTiles() {
        const {tiles, onTranslateTiles} = this.props;
        onTranslateTiles(tiles);

        setTimeout(() => this.handleAddTile(), 100)
    }

    handleAddTile() {
        const {onAddTile, tiles} = this.props;
        const availableFields = getEmptyFields(tiles)

        if(availableFields.length > 0) onAddTile(availableFields)
    }

}

const mapState = (state) => ({
    tiles: state.tiles
});

const mapDispatch = (d) => ({
    onAddTile(availableFields) { d(addTile(availableFields)) },
    onTranslateTiles(tiles) { d(translateTiles(tiles)) }
})

export default connect(mapState, mapDispatch)(App)
