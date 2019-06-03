import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules';

const epicMiddleware = createEpicMiddleware();

const middleware = applyMiddleware(epicMiddleware);
const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(middleware));
  epicMiddleware.run(rootEpic);
  return store;
};

const configuredStore = configureStore();
export default configuredStore;
