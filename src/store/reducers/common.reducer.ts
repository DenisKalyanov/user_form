import initialState, { TInitialState } from '../initial-state/initial-state';
import { REGISTER, SIGN_IN, SIGN_OUT } from '../types';

type ActionType = { type: 'REGISTER' } | { type: 'SIGN_IN' } | { type: 'SIGN_OUT' };

const commonReducer = (state: TInitialState = initialState, action: ActionType): TInitialState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        isAuthorization: true,
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthorization: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthorization: false,
      };
    default:
      return state;
  }
};

export default commonReducer;
