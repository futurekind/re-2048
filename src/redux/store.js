import {createStore} from 'redux';

import rootReducer from './reducer.root';

export default createStore(rootReducer,  window.devToolsExtension && window.devToolsExtension());
