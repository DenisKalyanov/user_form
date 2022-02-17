import { Dispatch } from 'react';
import { REGISTER, SIGN_OUT, SIGN_IN, SET_CURRENT_USER } from './actionTypes';

const BASE_URL = 'http://localhost:3000/';
export const register =
  (formData: any) =>
  async (
    dispatch: Dispatch<{
      type: string;
      login?: string;
    }>,
  ) => {
    await fetch(`${BASE_URL}register`)
      .then(() => {
        dispatch({ type: REGISTER });
        localStorage.setItem(formData.login, formData.password);
        localStorage.setItem('Authorization', formData.login);
        const { login } = formData;
        dispatch({ type: SET_CURRENT_USER, login });
      })
      .catch((err) => {
        console.error(err);
      });
  };

export const signIn =
  (login: string) =>
  async (dispatch: Dispatch<{ type: string; login?: string }>): Promise<void> => {
    await fetch(`${BASE_URL}sign-in`)
      .then(() => {
        dispatch({ type: SIGN_IN });
        localStorage.setItem('Authorization', login);
        dispatch({ type: SET_CURRENT_USER, login });
      })
      .catch((err) => {
        console.error(err);
      });
  };

export const signOut =
  () =>
  async (dispatch: Dispatch<{ type: string }>): Promise<void> => {
    await fetch(`${BASE_URL}sign-out`)
      .then(() => {
        dispatch({ type: SIGN_OUT });
        delete localStorage.Authorization;
      })
      .catch((err) => {
        console.error(err);
      });
  };
