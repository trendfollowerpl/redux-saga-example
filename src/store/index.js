import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import { rootReducer } from '../reducers';
import { forbiddenwordsMidleware } from '../middleware'

const middleware = [forbiddenwordsMidleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middleware))
);
export {
    store
}