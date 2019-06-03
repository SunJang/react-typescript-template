import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

const rootEpic = combineEpics();
//   ...sampleEpics,
const rootReducer = combineReducers({
  // sampleReducer,
});

export { rootEpic, rootReducer };
