import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export { store as default };
