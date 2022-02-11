import React from 'react';
import { Navigate } from 'react-router-dom';
import UserForm from '../components/UserForm';

export type TRoutes = { route: string; element: JSX.Element };

export const routes: TRoutes[] = [
  { route: '/', element: <Navigate replace to="/login" /> },
  { route: '/login', element: <UserForm /> },
  { route: '/register', element: <UserForm /> },
  { route: '/reset_password', element: <UserForm /> },
];
