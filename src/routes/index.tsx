import React from 'react';
import { Navigate } from 'react-router-dom';
import ErrorPage from '../components/error/ErrorPage';
import ForgotPassword from '../components/forgotPassword/forgotPassword';
import HomePage from '../components/home/HomePage';
import ChangePasswordForm from '../components/changePassword/ChangePasswordForm';
import UserForm from '../components/UserForm';

export type TRoutes = { route: string; element: JSX.Element };

export const routes: TRoutes[] = [
  { route: '/', element: <Navigate replace to="/login" /> },
  { route: '/login', element: <UserForm /> },
  { route: '/register', element: <UserForm /> },
  { route: '/change_password', element: <ChangePasswordForm /> },
  { route: '/home', element: <HomePage /> },
  { route: '*', element: <ErrorPage /> },
  { route: '/forgot_password', element: <ForgotPassword /> },
];
