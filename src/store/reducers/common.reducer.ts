import initialState, { TInitialState } from '../initial-state/initial-state';
import { REGISTER, SIGN_IN, SIGN_OUT, SET_CURRENT_USER } from '../types';

type ActionType =
  | { type: 'REGISTER' }
  | { type: 'SIGN_IN' }
  | { type: 'SIGN_OUT' }
  | { type: 'SET_CURRENT_USER'; login: string };

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
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.login,
      };
    default:
      return state;
  }
};

export default commonReducer;
