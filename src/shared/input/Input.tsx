import React from 'react';
import { TInput } from './input-types';

import './Input.scss';

const Input: React.FC<TInput> = ({ value, setValue, name, placeholder, type, isError, isErrorConfirmPassword }) => (
  <input
    className={`input ${isError && 'error'} ${isErrorConfirmPassword && 'error-cp'} `}
    type={type}
    {...{ placeholder, name, value }}
    onChange={(e) => setValue(e)}
  />
);

export default Input;
