import { combineReducers } from 'redux';
import commonReducer from './common.reducer';

export const rootReducer = combineReducers({
  commonReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
