import { Dispatch } from 'react';
import { REGISTER, SIGN_OUT, SIGN_IN, SET_CURRENT_USER } from '../types';

export const register =
  (formData: any) =>
  (
    dispatch: Dispatch<{
      type: string;
      login?: string;
    }>,
  ): void => {
    dispatch({ type: REGISTER });
    localStorage.setItem(formData.login, formData.password);
    localStorage.setItem('Authorization', formData.login);
    const { login } = formData;
    dispatch({ type: SET_CURRENT_USER, login });

  };

export const signIn =
  (login: string) =>
  (dispatch: Dispatch<{ type: string; login?: string }>): void => {
    dispatch({ type: SIGN_IN });
    localStorage.setItem('Authorization', login);
    dispatch({ type: SET_CURRENT_USER, login });

  };

export const signOut =
  () =>
  (dispatch: Dispatch<{ type: string }>): void => {
    dispatch({ type: SIGN_OUT });
    delete localStorage.Authorization;
  };

