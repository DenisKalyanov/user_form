import { Dispatch } from 'react';
import { REGISTER, SIGN_OUT, SIGN_IN } from '../types';

export const register =
  (formData: any) =>
  (
    dispatch: Dispatch<{
      type: string;
    }>,
  ): void => {
    dispatch({ type: REGISTER });
    localStorage.setItem(formData.login, formData.password);
    localStorage.setItem('Authorization', 'Authorization');
  };

export const signIn =
  () =>
  (dispatch: Dispatch<{ type: string }>): void => {
    dispatch({ type: SIGN_IN });
    localStorage.setItem('Authorization', 'Authorization');
  };

export const signOut =
  () =>
  (dispatch: Dispatch<{ type: string }>): void => {
    dispatch({ type: SIGN_OUT });
    delete localStorage.Authorization;
  };
